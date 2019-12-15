import React from "react";
import "./Bingo.css";

export default function BingoItem({
  onDragStart,
  item,
  where,
  onDragOver,
  onDrop,
  onItemClick,
  removeBingoItem,
  boardSize
}) {
  const isCheckedName = item.isChecked ? "checked" : "unchecked";
  const className = "item " + where.toString();

  const ww = window.innerWidth


  const fontSize = ww < 600 ? 3/boardSize : 1;

  return where === "in-pool" ? (
    <div
      key={item.id}
      className={className}
      
    >
      <div
        className="bingo-item-title"
        draggable
        onDragStart={e => {
          onDragStart(e, item.id);
        }}
        onClick={() => onItemClick(item.id)}
      >
        {item.title}
      </div>
      <div
        className="bingo-remove-button"
        onClick={() => removeBingoItem(item.id)}
      >
        ✖
      </div>
    </div>
  ) : (
    <div
    style={{
      fontSize: `${fontSize}rem`
    }}

      key={item.id}
      className={className}
      draggable
      onDragStart={e => {
        onDragStart(e, item.id);
      }}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onClick={() => onItemClick(item.id)}
    >
      {item.title}
      <div className={isCheckedName} />
    </div>
  );
}
