import React from "react";
import SubsDisplay from "./SubsDisplay";

export default function SubsSearch({ result, query, onClick }) {
  const lowerQuery = query.toLowerCase();

  const chunkMatches = result.filter(chunk =>
    chunk.text.toLowerCase().includes(lowerQuery)
  );

  return <SubsDisplay subs={chunkMatches || []} query={query} onClick={onClick}/>;
}
