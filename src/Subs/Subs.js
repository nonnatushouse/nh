import React, { useState, useEffect } from "react";
import "./Subs.css";
import { fetchSubs } from "./SubsService";
import SubsSearch from "./SubsSearch";
import EpisodeSelector from "./EpisodeSelector";
import SubsDisplay from "./SubsDisplay";
import { useHistory, useLocation } from "react-router-dom";

const initialState = {
  result: [],
  subs: [],
  seasons: new Map(),
  selectedSeason: 1,
  selectedEpisode: 1
};

export default function Subs() {
  const history = useHistory();
  const location = useLocation();
  const [state, setState] = useState(initialState);
  const [currTextValue, setCurrTextValue] = useState("");
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSubs();
      setState({
        ...state,
        result,
        seasons: getSeasonsAndEpisodes(result),
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

  function updateSeasonAndEpisode(season, episode, starttime=null) {
    if (episode < 0) episode = 0;
    if (season === 1 && episode < 1) {
      episode = 1;
    } else if (season === 1 && episode > 6) {
      episode = 6
    }
    setHighlight(starttime && [season, episode, starttime])
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
    if (query !== "") {
      history.push({ search: ""});

    }
    
  }

  function searchSubs(event) {
    event.preventDefault();
    history.push({ search: "?query=" + currTextValue });
    setState(prevState => {
      return {
        ...prevState,
        selectedSeason: -1,
        selectedEpisode: -1,
      };
    });
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
         <span role="img" aria-label="search"> &#x1f50e; </span>
        </button>
      </form>
      

      {query ? (
        <SubsSearch result={state.result} query={query} onClick={updateSeasonAndEpisode} />
      ) : (
        <SubsDisplay subs={state.subs} query="" highlight={highlight}/>
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
