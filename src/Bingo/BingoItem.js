import React from "react";
import "./Bingo.css";

export default function BingoItem({
  onDragStart,
  item,
  where,
  onDragOver,
  onDrop,
  onItemClick,
  removeBingoItem
}) {
  const isCheckedName = item.isChecked ? "checked" : "unchecked";
  const className = "item " + where.toString();
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
