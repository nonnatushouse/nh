import React from "react";
import "./Randomizer.css";
import Episode from "./Episode";
import proptypes from 'prop-types';
import classNames from "classnames";

function Season({ season, seasonToggle, episodeToggle }) {
  const episodes = season.episodes.map(ep => (
    <Episode episode={ep} episodeToggle={() => episodeToggle(ep)} />
  ));

  const cls = classNames("randomizer-season", {
    "contains-christmas-special": season.episodes[0].title.includes("Christmas Special")});


  return (
    <div className={"randomizer-season-container"}>
    <div>{season.title}</div>

      <ul className={cls}>{episodes}</ul>
      <button
        type="button"
        className="randomizer-button"
        onClick={seasonToggle}
      >
        Toggle {season.title}
      </button>
    </div>
  );
}

Season.propTypes = {
  season: proptypes.shape({
    id: proptypes.string.isRequired,
    title: proptypes.string.isRequired,
    episodes: 
        proptypes.arrayOf(
            proptypes.shape({
                id: proptypes.string.isRequired,
                title: proptypes.string.isRequired,
                isChecked: proptypes.bool.isRequired
    }).isRequired
  ).isRequired}),
  episodeToggle: proptypes.func.isRequired,
  seasonToggle: proptypes.func.isRequired
};

export default Season;
