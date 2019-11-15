import React from "react";
import "../App.css";
import "../Info.css";
import { NavLink} from "react-router-dom";

export default function CookiesPage() {

  return (
    <div className="info-container">
      <div className="info-big-title">Cookie Information</div>
      <div className='info-text'>This website does not use cookies. It does however make use of your browser's localStorage. The purpose of this is to remember
      the information you have entered between visits. The only infomration that is being stored is what episodes you last selected for the <NavLink 
              to="/randomizer"
              className="nav-link-in-text"
              activeClassName="selected"
            >
              Randomizer
            </NavLink>, and the tiles you have created in the <NavLink 
              to="/bingo"
              className="nav-link-in-text"
              activeClassName="selected"
            >
              Bingo
            </NavLink> game. </div>

            <div className='info-text'>The information is only stored locally in your browser between sessions. 
            It is not sent to any server, and is not shared with any third parties. </div>

            
            {/* <div className='info-text'>You can clear your localStorage at any time in your browser's settings, or by pressing the button below.</div>
            <button className='clear-local-storage-button' onClick={() => window.localStorage.clear()}>Clear localStorage</button> */}

    </div>
  );
}
