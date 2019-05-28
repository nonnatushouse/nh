import React from "react";
import {helperVar} from "./helper"

export default function RandomizerSelector ({selector}) {

    return (
        <div className="randomizer-selector-container">
        <div
          className="randomizer-button randomizer-selector"
          onClick={selector.bind(selector, helperVar.CHRISTMAS_SPECIALS)}
        > <div className="randomizer-button-title">
          Christmas Specials</div>
        </div>
        <div
          className="randomizer-button randomizer-selector"
          onClick={selector.bind(selector, helperVar.SERIES_FINALE)}
        ><div className="randomizer-button-title">
        Series Finale</div>
          
        </div>
      </div>

    );
}