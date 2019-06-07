import React from "react";
import BingoPool from "./BingoPool";
import BoardGenerator from "./BoardGenerator";
import BingoFilter from "./BingoFilter";


export default function BingoEdit({
  boardSize,
  onDragOver,
  onDrop,
  FOElist,
  onDragStart,
  onItemClick,
  removeBingoItem,
  createNewBingoItem,
  changeBoardSize,
  clearBoard,
  randomizeBoard,
  placement,
  filter,
  updateFilter
}) {
  return (
    <div className="bingo-edit-container">
      <BoardGenerator
        boardWidth={boardSize}
        boardHeight={boardSize}
        onDragOver={onDragOver}
        onDrop={onDrop}
        FOElist={FOElist.filter(item => item.placement !== "pool")}
        onDragStart={(e, id) => {
          onDragStart(e, id);
        }}
        onItemClick={onItemClick}
        placement={placement}
      />
      <BingoPool
        className="bingo-pool"
        FOElist={filterItems(FOElist, filter)}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onItemClick={onItemClick}
        removeBingoItem={removeBingoItem}
        createNewBingoItem={createNewBingoItem}
      />
      <div className="bingo-edit-board-container">
        <div className="info-title">Edit Board</div>
        <div className="bingo-board-size">
          <div className="board-size-buttons">

            <div className="bingo-edit-button"
              onClick={() => changeBoardSize(3)}>3x3</div>
            <div className="bingo-edit-button"
              onClick={() => changeBoardSize(4)}> 4x4 </div>
            <div className="bingo-edit-button"
              onClick={() => changeBoardSize(5)}> 5x5 </div>
          </div>

        </div>
        <div className="bingo-edit-button" onClick={clearBoard}>
          Clear Board
        </div>
        <div className="bingo-edit-button" onClick={randomizeBoard}>
          Randomize
        </div>

        <div className="info-title">Filter Items</div>
        <div className="board-size-buttons">
        <BingoFilter updateFilter={updateFilter} filter={filter} />

        </div>
      </div>
    </div>
  );
}


function filterItems(FOElist, filter) {
  const filteredFOE =  FOElist.filter(item => {
    // console.log("item",item)
    if (item.placement !== "pool") { return false}
    if (filter.length === 0) { return true}
    for (let tag in item.tags) {
      // console.log("tag",item.tags[tag])
      if (filter.includes(item.tags[tag])) {return true}
    }
    return false;
  });


  return filteredFOE;
}