import React from "react";

export default function PodcastPage() {
  return (
    <div className="podcast-page-container">
      <div className="info-big-title">Podcasts</div>
      <div className="info-text youtube-text">
        The intention was to list all podcasts about Call the Midwife on this
        site. Unforturnately two of them, "After Birth" and "Epic Old-School
        Recaps - Call the Midwife" appear to no longer be available online. The
        only one I am aware of that is still available is the Afterbuzz Call the
        Midwife podcast. If you know of another, please let me know!
      </div>

      <div className="info-title youtube-text podcast-title">Afterbuzz</div>
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
