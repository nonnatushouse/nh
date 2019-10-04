import React, { useState, useEffect } from "react";
import "./Subs.css";
import { fetchSubs } from "./SubsService";

export default function Subs() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSubs();
      setSubs(result.slice(32000, 32100));
    };
    fetchData();
  }, []);

  return (
    <div>
      {subs.map(chunk => (
        <>
          <p className="starttime">{formatTimecode(chunk.starttime)}</p>
          <p
            style={{ whiteSpace: "pre" }}
            dangerouslySetInnerHTML={{ __html: chunk.text }}
          ></p>
        </>
      ))}
    </div>
  );
}

function formatTimecode(timecode) {
  const sec = String(Math.floor((timecode % (1000 * 60)) / 1000));
  const min = String(Math.floor((timecode % (1000 * 60 * 60)) / (1000*60)));
  const hour = String(Math.floor((timecode % (1000 * 60 * 60 * 60)) / (1000*60*60)));

  return (
    hour.padStart(2, "0") +
    ":" +
    min.padStart(2, "0") +
    ":" +
    sec.padStart(2, "0")
  );
}
