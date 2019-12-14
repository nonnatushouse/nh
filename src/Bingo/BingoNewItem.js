import React, { useState } from "react";
import uuidv4 from 'uuid/v4';
import "./Bingo.css";
const MAX_LENGTH = 100;
const MIN_LENGTH = 3;

export default function BingoNewItem({createNewBingoItem}) {
    const [title, setTitle] = useState('');
    const onFormSubmit = event => {
        event.preventDefault();
    
        if (!title.trim()) return;
        const id = uuidv4();

        createNewBingoItem(id, title);
        setTitle('');
      };
    

  return (
    <div>
      <form className="new-bingo-item-form" onSubmit={onFormSubmit}>
        <input 
        maxLength={MAX_LENGTH}
        minLength={MIN_LENGTH}
          className="new-bingo-item-text-input"
          type="text"
          placeholder="Create your own Bingo tile"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <button className="new-bingo-item-add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
