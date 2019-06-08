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
    <>
    <div className="info-text bingo-play-text">Click "Edit" to create a Bingo board. When playing, click on a square to mark it as complete. Click again to uncheck it. You can edit your board at any time.</div>
    <BoardGenerator 
    boardHeight={boardSize}
    boardWidth={boardSize}
    onDragOver={onDragOver}
    onDrop={onDrop}
    FOElist={FOElist}
    onItemClick={onItemClick}
    onDragStart={onDragStart}
    />
    </>
  );
}
