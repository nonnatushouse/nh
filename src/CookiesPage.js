import React from "react";
import "./App.css";
import "./Info.css";
import { NavLink} from "react-router-dom";

export default function CookiesPage() {
  return (
    <div className="info-page">
      <div className="info-big-title">Cookie Information</div>
      <div className='info-text'>This site does not use cookies. It does however make use of your browser's localStorage. The purpose of this is to remember
        your settings between uses (such as your <NavLink 
              to="/bingo"
              className="nav-link-in-text"
              activeClassName="selected"
            >
              Bingo
            </NavLink> tile and your selected episodes in the <NavLink 
              to="/randomizer"
              className="nav-link-in-text"
              activeClassName="selected"
            >
              Randomizer
            </NavLink> 
            
            
            )</div>
    </div>
  );
}
