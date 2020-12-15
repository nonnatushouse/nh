import React, { useReducer} from "react";

const initialState = {punchlineReveal: false}

export default function CrackerJoke({
  text,
  punchline
})
{
  const [state, dispatch] = useReducer(reducer, initialState);




  let reveal = false;

  function revealPunchline() {
    dispatch({ type: "update", new: true });
  }






  return (<>
    <div className="joke-text">
      {text}
    </div>
    <div className="joke-punchline" onClick={revealPunchline}>
        {state.punchlineReveal ? punchline : ""}
    </div>
    <div className="joke-info">Click in the box to reveal the answer</div>

    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, punchlineReveal: action.new }
    };
}