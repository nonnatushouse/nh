import React from "react";
import { helperVar } from "./helper";
import { getSelection } from "./Seasons";

export default function RandomizerSelector({ selector }) {
  return (
    <div className="randomizer-selector-container">
      <div className="randomizer-season-title">Presets</div>
      <div
        className="randomizer-button randomizer-selector"
        onClick={selector.bind(
          selector,
          getSelection(helperVar.CHRISTMAS_SPECIALS)
        )}
      >
        <div className="randomizer-button-title">Christmas Specials</div>
      </div>
      <div
        className="randomizer-button randomizer-selector"
        onClick={selector.bind(selector, getSelection(helperVar.SERIES_FINALE))}
      >
        <div className="randomizer-button-title">Series Finales</div>
      </div>
      <div
        className="randomizer-button randomizer-selector"
        onClick={selector.bind(selector, getSelection(helperVar.FAVOURITES))}
      >
        <div className="randomizer-button-title">NH's Favourites</div>
      </div>
      <div
        className="randomizer-button randomizer-selector"
        onClick={selector.bind(selector, getSelection(helperVar.UPPERS))}
      >
        <div className="randomizer-button-title">Cheer me up</div>
      </div>
      <div
        className="randomizer-button randomizer-selector"
        onClick={selector.bind(selector, getSelection(helperVar.DOWNERS))}
      >
        <div className="randomizer-button-title">Make me cry</div>
      </div>
    </div>
  );
}
