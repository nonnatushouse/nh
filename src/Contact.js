import React from "react";
import "./Info.css";

export default function Contact() {
  return (
    <div className="info-container">
      <div className="info-big-title">Contact</div>
      <div className="info-text">
        If you find any inaccuracies on the website, or have any questions or
        comments, feel free to get in touch. The contact information is listed
        below.
      </div>

      <div className="info-text">
        Twitter:{" "}
        <a href="https://twitter.com/nonnatushouse1" target="_blank" rel="noopener noreferrer">@nonnatushouse1</a>{" "}
      </div>
      <div className="info-text">
        Youtube Channel:{" "}
        <a href="https://www.youtube.com/channel/UC1DTIko3OEfn7GljJy-a1cw" target="_blank" rel="noopener noreferrer">Nonnatus House</a>{" "}
      </div>      
      {/* <div className="info-text">Email: nonnatushouse@gmail.com </div> */}
    </div>
  );
}