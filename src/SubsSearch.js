import React from "react";
import SubsDisplay from "./SubsDisplay";

export default function SubsSearch({ result, query }) {
  const lowerQuery = query.toLowerCase();

  const searchSplit = query.split(/(?:\s)/);
  // console.log(searchSplit)
  const chunkMatches = result.filter(chunk =>
    chunk.text.toLowerCase().includes(lowerQuery)
  );
  // console.log(chunkMatches.length)
  // console.log(chunkMatches)

  return <SubsDisplay subs={chunkMatches || []} query={query} />;
}
