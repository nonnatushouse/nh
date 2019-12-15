import React from "react";
import "./Bingo.css";
import BingoItem from "./BingoItem";
import classNames from "classnames";

export default function BoardGenerator({
  boardWidth,
  boardHeight,
  onDragStart,
  onDragOver,
  onDrop,
  FOElist,
  onItemClick,
  placement
}) {
  if (boardWidth === 0 || boardHeight === 0) {
    return (
      <div className="board-generator-error-message">
        BoardGenerator needs width > 0 and height > 0
      </div>
    );
  }

  let h;
  let w;

  let board = [];

  for (h = 0; h < boardHeight; h++) {
    for (w = 0; w < boardWidth; w++) {
      const id = "" + w.toString() + "," + h.toString();
      const cl1 = classNames("on-board", {"dragOver":placement === id})
      const item = FOElist.find(item => item.placement === id) ? (
        <BingoItem
          onItemClick={onItemClick}
          key={id}
          item={FOElist.filter(item => item.placement === id)[0]}
          onDragStart={onDragStart}
          where={cl1}
          onDrop={e => onDrop(e, id)}
          onDragOver={(ev) => onDragOver(ev, id)}
          boardSize={boardWidth}
        />
      ) : null;

      const cl2 = classNames("board-tile", {"dragOver":placement === id})
      const boardTile =
        item === null ? (
          <div
            key={id}
            className= {cl2}
            onDrop={e => onDrop(e, id)}
            onDragOver={(ev) => onDragOver(ev, id)}
            draggable={false}
          >
            {/* {item} */}
          </div>
        ) : (
          item
        );

      board.push(boardTile);
    }
  }

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${boardWidth}, 1fr)`,
        gridTemplateRows: `repeat(${boardHeight}, 1fr)`
      }}
    >
      {board}
    </div>
  );
}
