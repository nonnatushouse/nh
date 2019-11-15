import React, { useReducer, useEffect, useCallback } from "react";
import "./Randomizer.css";
import { getSeasons, getEpisodes} from "./Seasons";
import Season from "./Season";
import classNames from "classnames";
import "../Info.css";
import RandomizerSelector from "./RandomizerSelector";
import {helperVar} from "./helper";
import {useEventListener} from "../useEventListener";


const initialState = {
  seasons: getSeasons(),
  episodes: getEpisodes(),
  randomEpisode: ""
};

const SEASON_TOGGLE = "SEASON-TOGGLE";
const EPISODE_TOGGLE = "EPISODE-TOGGLE";
const ALL_TOGGLE = "ALL-TOGGLE";
const RANDOMIZE = "RANDOMIZE";

const NO_EPISODE_SELECTED = "No episode selected";

const SELECTED_EPISODES_KEY = "SELECTED_EPISODES"

export default function Randomizer() {
  const [state, dispatch] = useReducer(sneakyReducer, initialState);
  
  const handler = useCallback(() => {
    try {
    const selectedEpsString = window.localStorage.getItem(SELECTED_EPISODES_KEY);
    if (!selectedEpsString) {return}
    const selectedEpisodes = JSON.parse(selectedEpsString);
    dispatch({type: helperVar.SELECTOR, selector: selectedEpisodes});
  }
    catch(error) {
    }
  } , [dispatch] )
  useEventListener("storage", handler)
  useEffect(() => { handler() } , [handler] )





  const allSeasons = state.seasons.map(season => {
    const seasonWithEpisodes = {
      ...season,
      episodes: season.episodes.map(id =>
        state.episodes.find(ep => ep.id === id)
      )
    };
    return (
      <Season
        key={season.id}
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

  const toggleAll = useCallback(() => dispatch({ type: ALL_TOGGLE }), [dispatch]);
  const randomize = useCallback(() => dispatch({ type: RANDOMIZE }), [dispatch]);
  const selector = useCallback((s) => dispatch({ type: helperVar.SELECTOR, selector: s }), [dispatch]);


  const titleClassName = classNames("randomizer-result-text", {
    "christmas-special-title": state.randomEpisode.includes("Christmas Special"),
    "no-episode-selected": state.randomEpisode.includes(NO_EPISODE_SELECTED)
  });

  return (
    <>
      <div className="randomizer-container">
        <div className="info-big-title">Episode Randomizer</div>
        <div className="randomizer-info">
          Can't decide what episode to watch? Let the randomizer decide for you!
          Just check the episodes you have available or would like to choose
          from below, and then click the "Randomize" button. A random episode
          will be suggested below!
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
        <RandomizerSelector selector={selector}></RandomizerSelector>
      </div>
    </>
  );
}

function reducer(state, action) {
  let allSelected = true;
  switch (action.type) {
    case SEASON_TOGGLE:
      action.seasonToggled.episodes.forEach(id => {
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
            : NO_EPISODE_SELECTED
      };

    case helperVar.SELECTOR:

      return {
        ...state,
        episodes: state.episodes.map(ep =>
          action.selector.includes(ep.id)
            ? { ...ep, isChecked: true }
            : { ...ep, isChecked: false }
        )
      };

    default:
      throw new Error("Unknown action" + action.type);
  }

}

function sneakyReducer(state, action) {
  const newState = reducer(state, action);
  //Sneaky stuff
  const checkedEpisodes = newState.episodes.filter(ep => ep.isChecked).map(ep => ep.id);

  window.localStorage.setItem(SELECTED_EPISODES_KEY, JSON.stringify(checkedEpisodes));

  return newState;

}