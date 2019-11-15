import React from "react";
import "./Randomizer.css";
import Episode from "./Episode";
import proptypes from "prop-types";
import classNames from "classnames";

function Season({ season, seasonToggle, episodeToggle }) {
  const episodes = season.episodes.map(ep => (
    <Episode key={ep.id} episode={ep} episodeToggle={() => episodeToggle(ep)} />
  ));

  const cls = classNames("randomizer-season", {
    "contains-christmas-special": season.episodes[0].title.includes(
      "Christmas Special"
    )
  });

  return (
    <div className={"randomizer-season-container"}>
      <div className="randomizer-season-header">
        <div className="randomizer-season-title">{season.title}</div>
        <button
          type="button"
          className="randomizer-toggle-button"
          onClick={seasonToggle}
        >
          Toggle {season.title}
        </button>
      </div>
      <ul className={cls}>{episodes}</ul>
    </div>
  );
}

Season.propTypes = {
  season: proptypes.shape({
    id: proptypes.string.isRequired,
    title: proptypes.string.isRequired,
    episodes: proptypes.arrayOf(
      proptypes.shape({
        id: proptypes.string.isRequired,
        title: proptypes.string.isRequired,
        isChecked: proptypes.bool.isRequired
      }).isRequired
    ).isRequired
  }),
  episodeToggle: proptypes.func.isRequired,
  seasonToggle: proptypes.func.isRequired
};

export default Season;
