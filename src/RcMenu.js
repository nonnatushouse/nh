import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Menu, { SubMenu, MenuItem } from "rc-menu";
import "rc-menu/assets/index.css";
import classNames from "classnames";
import { useMedia } from "./useMedia";
import "./RcMenu.css";

export default function RcMenu({ toggleMenu, menuIsExpanded }) {
  const isDesktop = useMedia(["(min-width: 600px)"], [true], false);
  const expandIcon = isDesktop ? "▿" : "";

  return (
    <div className="menu-container">
      <Menu
        mode={isDesktop ? "horizontal" : "inline"}
        className={classNames({
          mymenu: true,
          isopen: menuIsExpanded,
          "mymenu-mobile": !isDesktop,
          mainmenu: true
        })}
        selectable={false}
      >
        {/* Home */}
        <MenuItem key="home" className="mymenuitem mainmenu">
          <NavLink
            to="/"
            className="menu-link"
            activeClassName="selected"
            exact
            onClick={toggleMenu}
          >
            Home
          </NavLink>
        </MenuItem>

        {/* Countdown */}
        <MenuItem key="timer" className="mymenuitem mainmenu">
          <NavLink
            to="/timer"
            className="menu-link"
            activeClassName="selected"
            onClick={toggleMenu}
          >
            Countdown
          </NavLink>
        </MenuItem>

        {/* Quiz */}
        <MenuItem key="quiz" className="mymenuitem mainmenu">
          <NavLink
            to="/quiz"
            className="menu-link"
            activeClassName="selected"
            onClick={toggleMenu}
          >
            Quiz
          </NavLink>
        </MenuItem>

        <SubMenu key="misc" title={"Misc" + expandIcon} className="mysubmenu mainmenu">
          {/* Drinking Game */}
          <MenuItem key="drinking-game" className="mymenuitem mainmenu">
          <NavLink
            to="/drinking-game"
            className="menu-link"
            activeClassName="selected"
            onClick={toggleMenu}
          >
            Drinking Game
          </NavLink>
          </MenuItem>

          {/* Episode Randomizer */}
          <MenuItem key="episode-randomizer" className="mymenuitem mainmenu">
          <NavLink
            to="/episode-randomizer"
            className="menu-link"
            activeClassName="selected"
            onClick={toggleMenu}
          >
            Episode Randomizer
          </NavLink>
          </MenuItem>
        </SubMenu>

        {/* Contact */}
        <MenuItem key="contact" className="mymenuitem mainmenu">
        <NavLink
            to="/contact"
            className="menu-link"
            activeClassName="selected"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
