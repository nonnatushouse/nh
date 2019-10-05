import React from "react";
import "./EpisodeSelector.css";
import classNames from "classnames";

export default function EpisodeSelector({
  seasons,
  selectedSeason,
  selectedEpisode,
  onClick
}) {
  const season_buttons = Array.from(seasons.keys()).map(s => {
    const cls = classNames("subs-season", {
        "selected": s === selectedSeason
    }) 
    return (
      <div className={cls} onClick={() => onClick(s, 1)}>
        {s}
      </div>
    );
  });


  const eps = seasons.has(selectedSeason)
    ? Array.from(seasons.get(selectedSeason))
    : [];
  const episode_buttons = eps.map(e => {
    const ep = e === 0 ? "CS" : e;
    const cls = classNames("subs-episode", {
        "selected": e === selectedEpisode
    }) 
    return (
      <div className={cls} onClick={() => onClick(selectedSeason, e)}>
        {ep}
      </div>
    );
  });

  return (
    <div className="episode-selector-container">
      <div className="sub-se-container">
        <div>Season</div>
        <div className="sub-season-episode-container">{season_buttons}</div>
      </div>

      <div className="sub-se-container">
        <div>Episode</div>
        <div className="sub-season-episode-container">{episode_buttons}</div>
      </div>
    </div>
  );
}
