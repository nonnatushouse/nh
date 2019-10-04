import React, { useState, useEffect } from "react";
import "./Subs.css";
import { fetchSubs } from "./SubsService";

export default function Subs() {
  const [subs, setSubs] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSubs();
      setSubs(result.slice(32000, 32100))
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>Text 1</div>
      <div className="timestamp">timecode</div>
      <div>text 2</div>
      {subs.map((chunk) => <p style={{whiteSpace: "pre"}} dangerouslySetInnerHTML={{__html: chunk.text}}></p>)}
    </div>
  );
}
