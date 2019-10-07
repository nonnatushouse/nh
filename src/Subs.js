import React, { useState, useEffect } from "react";
import "./Subs.css";
import { fetchSubs } from "./SubsService";
import SubsSearch from "./SubsSearch";
import EpisodeSelector from "./EpisodeSelector";
import SubsDisplay from "./SubsDisplay";

const initialState = {
  result: [],
  subs: [],
  seasons: new Map(),
  titles: new Map(),
  selectedSeason: 1,
  selectedEpisode: 1
};

export default function Subs({ history, location }) {
  const [state, setState] = useState(initialState);
  const [currTextValue, setCurrTextValue] = useState("");
  const [query, setQuery] = useState("");

  console.log(process.env.PUBLIC_URL);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSubs();
      setState({
        ...state,
        result,
        seasons: getSeasonsAndEpisodes(result),
        titles: getTitles(result),
        subs: result.filter(
          chunk =>
            chunk.season === state.selectedSeason &&
            chunk.episode === state.selectedEpisode
        )
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setCurrTextValue(params.get("query") || "");
    setQuery(params.get("query") || "")
  }, [location.search]);

  function updateSeasonAndEpisode(season, episode) {
    if (state.selectedSeason !== season) {
      episode = 1;
    }
    setState(prevState => {
      return {
        ...prevState,
        selectedSeason: season,
        selectedEpisode: episode,
        subs: prevState.result.filter(
          chunk => chunk.season === season && chunk.episode === episode
        )
      };
    });
  }

  function searchSubs(event) {
    event.preventDefault();
    history.push({ search: "?query=" + currTextValue });
  }

  function getEpisodeTitle() {
    const key = String(state.selectedSeason) + String(state.selectedEpisode);
    let episodeTitle = "";
    if (state.titles.has(key)) {
      episodeTitle = state.titles.get(key);
    }
    return episodeTitle;
  }

  return (
    <div className="subs-container">
      <EpisodeSelector
        selectedEpisode={state.selectedEpisode}
        selectedSeason={state.selectedSeason}
        seasons={state.seasons}
        onClick={updateSeasonAndEpisode}
      ></EpisodeSelector>

      <form className="subs-form" onSubmit={searchSubs}>
        <input
          onChange={event => setCurrTextValue(event.target.value)}
          type="search"
          className="subs-search-textinput"
          value={currTextValue}
        ></input>
        <button type="submit" className="subs-search-button">
          &#x1f50e;
        </button>
      </form>
      

      {query ? (
        <SubsSearch result={state.result} query={query} />
      ) : (
        <SubsDisplay subs={state.subs} query="" />
      )}
    </div>
  );
}

function getSeasonsAndEpisodes(result) {
  const seasons = new Map();

  for (const chunk of result) {
    const { season, episode } = chunk;

    if (!seasons.has(season)) {
      seasons.set(season, new Set());
    }
    seasons.get(season).add(episode);
  }
  return seasons;
}

function getTitles(result) {
  const titles = new Map();

  for (const chunk of result) {
    const { season, episode, display_name } = chunk;
    const key = String(season) + String(episode);
    if (!titles.has(key)) {
      titles.set(key, display_name);
    }
  }
  return titles;
}
