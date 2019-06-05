import React from "react";
import BoardGenerator from "./BoardGenerator";
import "./Bingo.css";

export default function BingoPlay({
  boardSize,
  onDragOver,
  onDrop,
  FOElist,
  onDragStart,
  onItemClick,
}) {
  return (
    <BoardGenerator 
    boardHeight={boardSize}
    boardWidth={boardSize}
    onDragOver={onDragOver}
    onDrop={onDrop}
    FOElist={FOElist}
    onItemClick={onItemClick}
    onDragStart={onDragStart}
    />
  );
}
