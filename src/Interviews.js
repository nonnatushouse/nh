import React from "react";
import "./VideoPage.css";

export default function Interviews() {
  return (
    <div className="podcast-page-container">
      <div className="info-big-title">Interviews</div>
      <div className="info-text youtube-text">
        The cast and crew are interviewed quite often. They often appear on
        daytime television, on radio and are interviewed on red carpets. This is
        an attempt to collect as many of them as possible in one place, as well
        as highlight a few of my favourites.
      </div>
      <div className="info-title youtube-text podcast-title">Radio</div>
      <div className="info-text youtube-text">Series: 5-8</div>
      <div className="info-text youtube-text">
        Episode length: Approx. 50 minutes
      </div>
      <div className="info-text youtube-text">
        In this podcast the hosts discuss each episode from series 5 onwards.
        The podcast episodes were recorded and released shortly after each
        episode aired in the UK. They discribe the most prominent plot details
        and then discuss their favourite moments. Episodes are available where
        podcasts are found, and on youtube.
      </div>
      <a
        className="nav-link-in-text"
        href="http://www.afterbuzztv.com/call-the-midwife-after-show/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to website
      </a>{" "}
      {"    "}{" "}
      <a
        className="nav-link-in-text"
        href="https://www.youtube.com/playlist?list=PLUe7aTsP6T8IW4WW3jUkt1Ml9s7dSORd6"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to YouTube Playlist
      </a>
    </div>
  );
}
