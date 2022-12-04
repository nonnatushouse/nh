import React, { useReducer} from "react";
import classNames from "classnames";


const initialState = {punchlineReveal: false}

export default function CrackerJoke({
  text,
  punchline
})
{
  const [state, dispatch] = useReducer(reducer, initialState);


  function revealPunchline() {
    dispatch({ type: "update", new: true });
  }


  const cls = classNames("joke-punchline-text", {
    "is-revealed": state.punchlineReveal
  });


  return (<>
  <div className="joke-text">To honour the tradition of making a bad joke/pun at Christmas, here is your very own CtM themed one! </div>
    <div className="joke-text">
      {text}
    </div>
    <div className="joke-punchline" onClick={revealPunchline}>
      <div className={cls}>
           {punchline}
      </div>
    </div>
    <div className="joke-info">Click/tap the box to reveal the hilarious punchline</div>

    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, punchlineReveal: !state.punchlineReveal }
    
    default:
      return {...state}
    };
}