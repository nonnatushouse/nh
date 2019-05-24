import React, { useReducer } from "react";
import "./Randomizer.css";
import { getSeasons, getEpisodes } from "./Seasons";
import Season from "./Season";
import classNames from "classnames";
import "./Info.css";

const initialState = {
  seasons: getSeasons(),
  episodes: getEpisodes(),
  randomEpisode: ""
};

const SEASON_TOGGLE = "SEASON-TOGGLE";
const EPISODE_TOGGLE = "EPISODE-TOGGLE";
const ALL_TOGGLE = "ALL-TOGGLE";
const RANDOMIZE = "RANDOMIZE";

export default function Randomizer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const allSeasons = state.seasons.map(season => {
    const seasonWithEpisodes = {
      ...season,
      episodes: season.episodes.map(id =>
        state.episodes.find(ep => ep.id === id)
      )
    };
    return (
      <Season
        season={seasonWithEpisodes}
        seasonToggle={() =>
          dispatch({ type: SEASON_TOGGLE, seasonToggled: season })
        }
        episodeToggle={ep =>
          dispatch({ type: EPISODE_TOGGLE, episodeToggled: ep })
        }
      />
    );
  });

  function toggleAll() {
    dispatch({ type: ALL_TOGGLE });
  }

  function randomize() {
    dispatch({ type: RANDOMIZE });
  }

  const titleClassName = classNames("randomizer-result-text", {
    "christmas-special-title": state.randomEpisode.includes("Christmas Special")
  });

  return (
    <>
      <div className="randomizer-container">
        <div className="info-big-title">Episode Randomizer</div>
        <div className="randomizer-info">
          Can't decide what episode to watch? Let the randomizer decide for you!
          Just check the episodes you have available or would like to choose
          from below, and then click the "Randomize" button. A random episode
          will be suggested in the box below!
        </div>
        <div className="randomizer-result">
          <div className={titleClassName}>{state.randomEpisode}</div>
        </div>
        <button
          type="button"
          className="randomizer-button randomize-button"
          onClick={randomize}
        >
          Randomize
        </button>
        <button type="button" className="randomizer-button" onClick={toggleAll}>
          Toggle All
        </button>
        <div className="randomizer-all-seasons">{allSeasons}</div>
      </div>
    </>
  );
}

function reducer(state, action) {
  let allSelected = true;
  switch (action.type) {
    case SEASON_TOGGLE:
      action.seasonToggled.episodes.forEach(id => {
        console.log("ID");
        console.log(id);
        const ep = state.episodes.find(ep => ep.id === id);
        if (!ep.isChecked) {
          allSelected = false;
        }
      });

      return {
        ...state,
        episodes: state.episodes.map(ep => {
          if (action.seasonToggled.episodes.includes(ep.id)) {
            ep = { ...ep, isChecked: allSelected ? false : true };
          }
          return ep;
        })
      };

    case EPISODE_TOGGLE:
      return {
        ...state,
        episodes: state.episodes.map(ep =>
          ep.id === action.episodeToggled.id
            ? { ...ep, isChecked: !ep.isChecked }
            : ep
        )
      };

    case ALL_TOGGLE:
      state.episodes.forEach(ep => {
        if (!ep.isChecked) {
          allSelected = false;
        }
      });

      return {
        ...state,
        episodes: state.episodes.map(ep =>
          allSelected ? { ...ep, isChecked: false } : { ...ep, isChecked: true }
        )
      };

    case RANDOMIZE:
      const selectedEpisodes = state.episodes.filter(ep => ep.isChecked);

      return {
        ...state,
        randomEpisode:
          selectedEpisodes.length !== 0
            ? selectedEpisodes[
                Math.floor(Math.random() * selectedEpisodes.length)
              ].title
            : "No episode selected"
      };

    default:
      throw new Error("Unknown action" + action.type);
  }
}
