import React from "react";

export default function SubsDisplay({ subs, query }) {
  const q = query.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
  // TODO: Display chunks. May get query, which should be highlighted if exists
  const re = new RegExp(q, "gi");

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
        <h3 className="episode-title" style={{position:"static"}}>
          {subs.length} matches found in {groupedChunks.size} episodes.
        </h3>
      ) : null}
      {Array.from(groupedChunks.values()).map(group => (
        <div>
          <h3 className="episode-title">
            {group[0].display_name}{" "}
            {query ? <small>({group.length} hits)</small> : null}
          </h3>
          {group.map(chunk => {
            const text = chunk.text.replace(re, `<em>$&</em>`);

            return (
              <>
                <p className="starttime">{formatTimecode(chunk.starttime)}</p>
                <p
                  className="subs-text"
                  dangerouslySetInnerHTML={{ __html: text }}
                ></p>
              </>
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
