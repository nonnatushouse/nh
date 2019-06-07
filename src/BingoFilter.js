import React from "react";
import "./Bingo.css";
import classNames from "classnames";
import {S1,S2,S3,S4,S5,S6,S7,S8,S9,FRED,SR_J,SR_E,SR_MJ,JENNY,CYNTHIA,TRIXIE,PETER,CHUMMY,DR_T,
  TIM,PATSY,SHELAGH,SR_W,TOM,PHYLLIS,BARBARA,VI,DELIA,VAL,REGGIE,LUCILLE,SR_H,SR_F,MO_M
} from "./FrequentlyOccurring"

const allFilterCategories = [S1,S2,S3,S4,S5,S6,S7,S8,S9,FRED,SR_J,SR_E,SR_MJ,JENNY,CYNTHIA,TRIXIE,PETER,CHUMMY,DR_T,
    TIM,PATSY,SHELAGH,SR_W,TOM,PHYLLIS,BARBARA,VI,DELIA,VAL,REGGIE,LUCILLE,SR_H,SR_F,MO_M]

export default function BingoFilter({updateFilter, filter}) {
    
    const items = allFilterCategories.map(item => {
        const cln = classNames("bingo-filter-button", {"filter-unchecked":!filter.includes(item)})
        return (
            <div className={cln}
            onClick={() => updateFilter(item)}
            >
            {item}
            </div>
        );
    })

    return ( <div className="filter-options">{items}</div>);
}