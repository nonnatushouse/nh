import React, { useReducer } from "react";
import classNames from "classnames";
import { getStringToShow} from "./Strings"

const initialState = {
    text: "",
    swap: false,
}

export default function TextStrip({totalCount, allProducers, startTime}) {
    const [state, dispatch] = useReducer(reducer, initialState);


    const totalTime = new Date() - startTime;
    const [newText, isTidbit] = getStringToShow(totalCount, allProducers, totalTime);

    if (newText !== state.text) {
        dispatch({type: "UpdateText", newText})
    }

    const cls = classNames("text-strip", {"text-strip-text": !isTidbit}, {"swap1": isTidbit & state.swap}, {"swap2": isTidbit & !state.swap}, {"text-strip-tidbit": isTidbit})

    return (
    <div className="text-strip-container">
        <div className={cls}>
            {state.text}
        </div>    
        
    </div>
    
    
    );
}



function reducer(state, action) {
    switch (action.type) {
        case "UpdateText":
            return {...state, text: action.newText, swap: !state.swap}
        
        default:
            return {...state};
    }
}