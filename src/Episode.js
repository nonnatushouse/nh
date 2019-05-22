import React from "react";
import "./Randomizer.css";
import proptypes from "prop-types";
import classNames from "classnames";

function Episode({ episode, episodeToggle }) {
    const buttonText = episode.isChecked ? '✓' : '';

    const listItemClassName = classNames("randomizer-episode", {
      "christmas-special": episode.title.includes("Christmas Special")});


  return (
    <li
      key={episode.id}
      className={listItemClassName}
      onClick={episodeToggle}
    >
      <button
        type="button"
        className={
          "episode-checkbox " + (episode.isChecked ? "checked" : "unchecked")
        }
      >{buttonText}</button>
      <div className="randomizer-episode-title">{episode.title}</div>
    </li>
  );
}

Episode.propTypes = {
  episode: proptypes.shape({
    id: proptypes.string.isRequired,
    title: proptypes.string.isRequired,
    isChecked: proptypes.bool.isRequired
  }).isRequired,
  episodeToggle: proptypes.func.isRequired
};

export default Episode;
