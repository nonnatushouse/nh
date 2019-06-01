import React from "react";
import "./Bingo.css";
import BingoItem from "./BingoItem";
import BingoNewItem from "./BingoNewItem"

export default function BingoPool({
  FOElist,
  onDrop,
  onDragStart,
  onDragOver,
  onItemClick,
  removeBingoItem,
  createNewBingoItem
}) {
  const itemList = FOElist.map(item => (
    <BingoItem
      removeBingoItem={removeBingoItem}
      onItemClick={onItemClick}
      key={item.id}
      onDragStart={onDragStart}
      item={item}
      where="in-pool"
    />
  ));

  return (
    <div
      className="bingo-pool-container"
      onDragOver={e => onDragOver(e)}
      onDrop={e => {
        onDrop(e, "pool");
      }}
    >
      <BingoNewItem createNewBingoItem={createNewBingoItem} />
      <div className="bingo-pool">{itemList}</div>
    </div>
  );
}
