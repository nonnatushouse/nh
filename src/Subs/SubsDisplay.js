import React, { useEffect, useRef } from "react";

export default function SubsDisplay({
  subs,
  query,
  onClick,
  highlight = null
}) {
  const highlightRef = useRef(null);
  useEffect(() => {
    if (highlight && highlightRef.current) {
      highlightRef.current.scrollIntoView({block: "center"});
    }

  }, [highlight])

  const q = query.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
  // TODO: Display chunks. May get query, which should be highlighted if exists
  const re = new RegExp(`(${q})`, "gi");

  const groupedChunks = new Map();

  for (const chunk of subs) {
    const key = `${chunk.season}_${chunk.episode}`;
    if (!groupedChunks.has(key)) {
      groupedChunks.set(key, []);
    }
    groupedChunks.get(key).push(chunk);
  }

  return (
    <div>
      {query ? (
        <h3 className="episode-title" style={{ position: "static" }}>
          {subs.length} hit{subs.length !== 1 ? "s" : ""} in {groupedChunks.size} episode{groupedChunks.size !== 1 ? "s" : ""}
        </h3>
      ) : null}
      {Array.from(groupedChunks.values()).map(group => (
        <div key={`${group[0].season}_${group[0].episode}`}>
          <h3 className="episode-title">
            {group[0].episode === 0 ? `${2010 + parseInt(group[0].season)} Christmas Special` : `S${group[0].season}E${group[0].episode}`}{" "}
            {query ? <small>({group.length} hit{group.length !== 1 ? "s" : ""})</small> : null}
          </h3>
          {group.map(chunk => {
            let parts = [chunk.text];
            if (query) parts = chunk.text.split(re);
            for (let i = 1; i < parts.length; i += 2) {
              parts[i] = <em key={i}>{parts[i]}</em>;
            }

            const isHighlighted =
              highlight &&
              highlight[0] === chunk.season &&
              highlight[1] === chunk.episode &&
              highlight[2] === chunk.starttime;

            return (
              <React.Fragment key={`${chunk.season}_${chunk.episode}_${chunk.starttime}`}>
                <p className="starttime" ref={isHighlighted ? highlightRef : null}>
                  {formatTimecode(chunk.starttime)}
                </p>
                <p
                  className="subs-text"
                  onClick={() =>
                    onClick &&
                    onClick(chunk.season, chunk.episode, chunk.starttime)
                  }
                >{parts}</p>
              </React.Fragment>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function formatTimecode(timecode) {
  const sec = String(Math.floor((timecode % (1000 * 60)) / 1000));
  const min = String(Math.floor((timecode % (1000 * 60 * 60)) / (1000 * 60)));
  const hour = String(
    Math.floor((timecode % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60))
  );

  return (
    hour.padStart(2, "0") +
    ":" +
    min.padStart(2, "0") +
    ":" +
    sec.padStart(2, "0")
  );
}
