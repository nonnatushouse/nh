import React from "react";
import "./Bingo.css";
import classNames from "classnames";
import {allFilterCategories
} from "./FrequentlyOccurring"



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