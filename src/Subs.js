import React, { useState, useEffect } from "react";
import "./Subs.css";
import { fetchSubs } from "./SubsService";
import EpisodeSelector from "./EpisodeSelector";

const initialState = {
  result: [],
  subs: [],
  seasons: new Map(),
  selectedSeason: 1,
  selectedEpisode: 1
};

export default function Subs() {
  const [state, setState] = useState(initialState);

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

  return (
    <div className="subs-container">
      <EpisodeSelector
        selectedEpisode={state.selectedEpisode}
        selectedSeason={state.selectedSeason}
        seasons={state.seasons}
        onClick={updateSeasonAndEpisode}
      ></EpisodeSelector>

      {state.subs.map(chunk => (
        <>
          <p className="starttime">{formatTimecode(chunk.starttime)}</p>
          <p
            className="sub-text"
            dangerouslySetInnerHTML={{ __html: chunk.text }}
          ></p>
        </>
      ))}
    </div>
  );
}

function formatTimecode(timecode) {
  const sec = String(Math.floor((timecode % (1000 * 60)) / 1000));
  const min = String(Math.floor((timecode % (1000 * 60 * 60)) / (1000 * 60)));
  const hour = String(
    Math.floor((timecode % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60))
  );

  return (
    hour.padStart(2, "0") +
    ":" +
    min.padStart(2, "0") +
    ":" +
    sec.padStart(2, "0")
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
