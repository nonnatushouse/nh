import React from "react";
import "./Bingo.css";
import BingoItem from "./BingoItem";

export default function BoardGenerator({
  boardWidth,
  boardHeight,
  onDragStart,
  onDragOver,
  onDrop,
  FOElist,
  onItemClick
}) {
  if (boardWidth === 0 || boardHeight === 0) {
    return <div className="board-generator-error-message">BoardGenerator needs width > 0 and height > 0</div>;
  } 

  let h;
  let w;

  let board = [];

  for (h = 0; h < boardHeight; h++) {
    for (w = 0; w < boardWidth; w++) {
      const id = "" + w.toString() + "," + h.toString();
      const item = FOElist.find(item => item.placement === id) ? (
        <BingoItem
          onItemClick={onItemClick}
          key={id}
          item={FOElist.filter(item => item.placement === id)[0]}
          onDragStart={onDragStart}
          where="on-board"
          onDrop={e => onDrop(e, id)}
          onDragOver={onDragOver}
        />
      ) : null;

      const boardTile = ( item === null ?
        <div
          key={id}
          className="board-tile"
          onDrop={e => onDrop(e, id)}
          onDragOver={onDragOver}
          draggable={false}
        >
          {/* {item} */}
        </div> : item
      );

      board.push(boardTile);
    }

  }


  return <div className="board" style={{ gridTemplateColumns: `repeat(${boardWidth}, 1fr)`, gridTemplateRows: `repeat(${boardHeight}, 1fr)` }} >{board}</div>;
}
