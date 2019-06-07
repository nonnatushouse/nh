import React from "react";
import "./VideoPage.css";

export default function VideoPage() {
  return (
    <div className="youtube-page-container">
      <div className="info-big-title">Videos</div>
      <div className="info-title youtube-text">Charity & Fun</div>
      <div className="info-text youtube-text">
        This list contains mainly videos made for charity.
      </div>
      <iframe
        title="charity-playlist"
        className="video-frame"
        src="https://www.youtube.com/embed/playlist?list=PLUe7aTsP6T8JOZLwzAH3mA4vLxPcsjHqK"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen='allowFullScreen'
      />
      <div className="info-title youtube-text">Interviews</div>
      <div className="info-text youtube-text">
        Here is a playlist of interviews with the cast.
      </div>
      <iframe
        title="interview-playlist"
        className="video-frame"
        src="https://www.youtube.com/embed/videoseries?list=PLUe7aTsP6T8JGFZrXq-TkkwlwT52JuuHr"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen='allowFullScreen'
      />
    </div>
  );
}
