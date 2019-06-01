import React from "react";
import BoardGenerator from "./BoardGenerator";
import "./Bingo.css";

export default function BingoBoard({ boardSize, onDragOver, onDrop, FOElist, onDragStart, onItemClick }) {
  return (
    <div>
      <BoardGenerator
        boardHeight={boardSize}
        boardWidth={boardSize}
        onDragOver={onDragOver}
        onDrop={onDrop}
        FOElist={FOElist}
        onDragStart={onDragStart}
        onItemClick={onItemClick}
      />
    </div>
  );
}
