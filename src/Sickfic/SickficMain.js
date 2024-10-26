import React, { useReducer, useCallback } from "react";
import "../Randomizer/Randomizer.css";
import "./Sickfic.css"
import { getCaretaker, getAilments, getLocation, getSufferingFrom} from "./SickficData";
import classNames from "classnames";
import "../Info.css";


const initialState = {
  people: getCaretaker(),
  ailments: getAilments(),
  location: getLocation(),
  sufferings: getSufferingFrom(),
  randomCaretaker: "",
  randomSickie:"",
  randomAilment: "",
  randomLocation: "",
  randomSuffering:"",
  ailment:true
};


const RANDOMIZE = "RANDOMIZE";

export default function SickficMain() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const randomize = useCallback(() => dispatch({ type: RANDOMIZE }), [dispatch]);


  const titleClassName = classNames("sickfic-result-text", {
    "hidden": !state.randomCaretaker
  });

  const ailment = state.randomCaretaker + " takes care of " + state.randomAilment + " " + state.randomSickie + " " + state.randomLocation
  const suffering = state.randomCaretaker + " takes care of " + state.randomSickie + " suffering from " +  state.randomSuffering + " " + state.randomLocation

  return (
    <>
      <div className="randomizer-container">
        <div className="info-big-title">Sickfic Randomizer</div>
        <div className="randomizer-info">
          Want some sickfic inspo? Let this randomizer spit out a fun(?) scenario for inspiration!
        </div>
        <div>{/* className="randomizer-result" */}
        {state.ailment ? <div className={titleClassName}>{ailment}</div> : <div className={titleClassName}>{suffering}</div>}

        </div>
        <button
          type="button"
          className="randomizer-button randomize-button"
          onClick={randomize}
        >
          Randomize
        </button>
      </div>
    </>
  );
}


function reducer(state, action) {

    switch (action.type) {
 
      case RANDOMIZE:
        const ailment = Math.random() < 0.5;
      
        const randomCaretaker = state.people.length !== 0
        ? state.people[
            Math.floor(Math.random() * state.people.length)
          ].name
        : "SrE"

        let randomSickie = state.people.length !== 0
        ? state.people[
            Math.floor(Math.random() * state.people.length)
          ].name
        : "SrJ"
        if (randomCaretaker === randomSickie) {
            randomSickie = "self"
        }

        const randomAilment = state.ailments.length !== 0
        ? state.ailments[
            Math.floor(Math.random() * state.ailments.length)
          ]
        : "feverish"
        const randomLocation = state.location.length !== 0
        ? state.location[
            Math.floor(Math.random() * state.location.length)
          ]
        : "NH"
        const randomSuffering = state.sufferings.length !== 0
        ? state.sufferings[
            Math.floor(Math.random() * state.sufferings.length)
          ]
        : "fever"


        return {
          ...state,
          randomCaretaker,
          randomSickie,
          randomAilment,
          randomLocation,
          randomSuffering,
          ailment
        };
  
      default:
        throw new Error("Unknown action" + action.type);
    }
  
  }