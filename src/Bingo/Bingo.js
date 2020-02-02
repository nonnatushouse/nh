import React, { useReducer, useEffect, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import uuidv4 from "uuid/v4";
import "./Bingo.css";
import BingoPlay from "./BingoPlay";
import BingoEdit from "./BingoEdit";
import { getFrequentlyOccurringEvents } from "../FrequentlyOccurring";
import { bingoBoardParsedFromURL } from "./BingoUtils";

const BOARD_SIZE = 3;

const ON_DRAG_START = "ON_DRAG_START";
const ON_DROP = "ON_DROP";
const CLICK_FILL = "CLICK_FILL";
const PLAY_CLICK = "PLAY_CLICK";

const GAME_STATE_PLAY = "GAME_STATE_PLAY";
const GAME_STATE_EDIT = "GAME_STATE_EDIT";

const STATE_KEY = "STATE_KEY";
const BOARD_LOADED_FROM_SAVED_STATE = "BOARD_LOADED_FROM_SAVED_STATE";
const TOGGLE_GAME_STATE = "TOGGLE_GAME_STATE";

const CHANGE_BOARD_SIZE = "CHANGE_BOARD_SIZE";
const CLEAR_BOARD = "CLEAR_BOARD";

const NEW_BINGO_ITEM = "NEW_BINGO_ITEM";
const REMOVE_BINGO_ITEM = "REMOVE_BINGO_ITEM";
const RANDOMIZE_BOARD = "RANDOMIZE_BOARD";

const UPDATE_PLACEMENT = "UPDATE_PLACEMENT";
const UPDATE_FILTER = "UPDATE_FILTER";
const BOARD_LOADED_FROM_URL = "BOARD_LOADED_FROM_URL";

const initialState = {
  FOElist: getFrequentlyOccurringEvents(),
  boardSize: BOARD_SIZE,
  gameState: GAME_STATE_PLAY,
  dragOverPlacement: null,
  filter: []
};

export default function Bingo() {
  const history = useHistory();
  const location = useLocation();
  const [state, dispatch] = useReducer(sneakyReducer, initialState);

  // Underscore encoding = %5f  (get it back by running string through decode URI component  encodeURIComponent)
  // Underscore as separator, SPLIT!(TM), then do the magic dance
  const handler = useCallback(() => {
    try {
      const [boardSize, boardArray] = bingoBoardParsedFromURL(location.search);
      if (boardArray) {
        dispatch({ type: BOARD_LOADED_FROM_URL, placements: boardArray, boardSize });
        return;
      }
      const savedState = window.localStorage.getItem(STATE_KEY);

      if (!savedState) {
        return;
      }
      const state = JSON.parse(savedState);
      if (!state) return;
      dispatch({ type: BOARD_LOADED_FROM_SAVED_STATE, savedState: state });
    } catch (error) {}
  }, [dispatch]);
  useEffect(() => {
    handler();
  }, [handler]);

  function onDrop(ev, placement) {
    ev.preventDefault();
    ev.stopPropagation();
    ev.persist();
    dispatch({ type: ON_DROP, ev, placement });
  }

  function onDragOver(ev, placement) {
    ev.preventDefault();
    ev.stopPropagation();
    if (state.dragOverPlacement !== placement) {
      dispatch({ type: UPDATE_PLACEMENT, placement });
    }
  }

  function onDragStart(ev, id) {
    ev.dataTransfer.setData("id", id);
  }

  function onEditClick(id) {
    dispatch({ type: CLICK_FILL, id });
  }

  function onPlayClick(id) {
    dispatch({ type: PLAY_CLICK, id });
  }

  function toggleGameState(board) {
    history.push({ search: "?" + board });
    dispatch({ type: TOGGLE_GAME_STATE });
  }

  function changeBoardSize(newSize) {
    dispatch({ type: CHANGE_BOARD_SIZE, size: newSize });
  }
  function clearBoard() {
    dispatch({ type: CLEAR_BOARD });
  }

  function createNewBingoItem(id, title) {
    dispatch({ type: NEW_BINGO_ITEM, id, title });
  }

  function removeBingoItem(id) {
    dispatch({ type: REMOVE_BINGO_ITEM, id });
  }

  function randomizeBoard() {
    dispatch({ type: RANDOMIZE_BOARD });
  }

  function updateFilter(filterItem) {
    dispatch({ type: UPDATE_FILTER, filterItem });
  }
  function dummy(e, id) {}

  const buttonText = state.gameState === GAME_STATE_EDIT ? "Play" : "Edit";

  // + btoa(JSON.stringify(state.filter))
  let URL_Saved = "";

  if (
    state.FOElist.filter(item => {
      return item.placement !== "pool";
    }).length !== 0
  ) {
    let h, w;
    for (h = 0; h < state.boardSize; h++) {
      for (w = 0; w < state.boardSize; w++) {
        const p = `${w},${h}`;
        const item = state.FOElist.find(it => it.placement === p);
        if (item) {
          if (item.id.length === 2) {
            URL_Saved += item.id;
          } else {
            const URL_text = encodeURIComponent(item.title).replace(/_/g, "%5f");
            URL_Saved += URL_text;
          }
        } else {
          URL_Saved += "~";
        }
        URL_Saved += "_";
      }
    }
  }
  URL_Saved = URL_Saved.slice(0, -1);

  return (
    <>
      <div className="bingo-container">
        <div className="info-big-title">Bingo </div>
        <button
          type="button"
          className="bingo-play-edit-toggle-button"
          onClick={() => toggleGameState(URL_Saved)}
        >
          {buttonText}
        </button>

        {/* <NavLink
          className="bingo-play-edit-toggle-button"
          to={URL_Text}
          activeClassName="selected"
          onClick={() => toggleGameState(URL_Saved)}
        >
          {buttonText}
        </NavLink> */}

        {state.gameState === GAME_STATE_PLAY ? (
          <BingoPlay
            className="bingo-play-container"
            boardSize={state.boardSize}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragStart={(e, id) => dummy(e, id)}
            FOElist={state.FOElist.filter(item => item.placement !== "pool")}
            onItemClick={onPlayClick}
          />
        ) : (
          <BingoEdit
            className="bingo-edit-container"
            FOElist={state.FOElist.map(item => item)}
            boardSize={state.boardSize}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onItemClick={onEditClick}
            removeBingoItem={removeBingoItem}
            createNewBingoItem={createNewBingoItem}
            onDragStart={(e, id) => {
              onDragStart(e, id);
            }}
            changeBoardSize={changeBoardSize}
            clearBoard={clearBoard}
            randomizeBoard={randomizeBoard}
            placement={state.dragOverPlacement}
            filter={state.filter}
            updateFilter={updateFilter}
          />
        )}
      </div>
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case ON_DRAG_START:
      return { ...state };

    case ON_DROP:
      const id = action.ev.dataTransfer.getData("id");

      try {
        const fromPlacement = state.FOElist.find(item => item.id === id)
          .placement;
        const newFOE = state.FOElist.map(item => {
          let newPlace = item.placement;
          if (
            item.id !== id &&
            item.placement === action.placement &&
            item.placement !== "pool"
          ) {
            newPlace = fromPlacement;
          }
          return item.id === id
            ? { ...item, placement: action.placement }
            : { ...item, placement: newPlace };
        });

        return { ...state, FOElist: newFOE, dragOverPlacement: null };
      } catch (error) {}

      return { ...state };

    case CLICK_FILL:
      const placement = state.FOElist.find(item => item.id === action.id)
        .placement;
      if (placement !== "pool") {
        const newFOE = state.FOElist.map(item => {
          return item.id === action.id
            ? { ...item, placement: "pool", isChecked: false }
            : { ...item };
        });
        return { ...state, FOElist: newFOE };
      }
      let h;
      let w;
      for (h = 0; h < state.boardSize; h++) {
        for (w = 0; w < state.boardSize; w++) {
          const placement = "" + w.toString() + "," + h.toString();
          if (!state.FOElist.find(item => item.placement === placement)) {
            const newFOE = state.FOElist.map(i => {
              return i.id === action.id
                ? { ...i, placement: placement }
                : { ...i };
            });
            return { ...state, FOElist: newFOE };
          }
        }
      }
      return { ...state };

    case BOARD_LOADED_FROM_SAVED_STATE:
      return {
        ...state,
        FOElist: action.savedState.FOElist,
        boardSize: action.savedState.boardSize
      };

    case TOGGLE_GAME_STATE:
      const newGameState =
        state.gameState === GAME_STATE_EDIT ? GAME_STATE_PLAY : GAME_STATE_EDIT;
      return { ...state, gameState: newGameState };

    case PLAY_CLICK:
      const newFOE = state.FOElist.map(item => {
        return item.id === action.id
          ? { ...item, isChecked: !item.isChecked }
          : { ...item };
      });
      return { ...state, FOElist: newFOE };

    case CHANGE_BOARD_SIZE:
      if (state.boardSize === action.size) {
        return { ...state };
      }
      const newFOElist = state.FOElist.map(item => {
        return { ...item, placement: "pool", isChecked: false };
      });
      return { ...state, FOElist: newFOElist, boardSize: action.size };

    case CLEAR_BOARD:
      const newFOElist2 = state.FOElist.map(item => {
        return { ...item, placement: "pool", isChecked: false };
      });
      return { ...state, FOElist: newFOElist2, filter: [] };

    case NEW_BINGO_ITEM:
      const newItem = {
        id: action.id,
        isChecked: false,
        placement: "pool",
        title: action.title,
        tags: []
      };
      let newStateFOE = state.FOElist.map(item => item);
      newStateFOE.unshift(newItem);
      return { ...state, FOElist: newStateFOE };

    case REMOVE_BINGO_ITEM:
      return {
        ...state,
        FOElist: state.FOElist.filter(item => item.id !== action.id)
      };

    case RANDOMIZE_BOARD:
      let tmpFOElist = state.FOElist.map(item => {
        return { ...item, placement: "pool", isChecked: false };
      });
      let he;
      let wi;
      let randomizedBoard = [];
      for (he = 0; he < state.boardSize; he++) {
        for (wi = 0; wi < state.boardSize; wi++) {
          const placement = "" + wi.toString() + "," + he.toString();
          if (tmpFOElist.length === 0) {
            break;
          }
          let randomItem =
            tmpFOElist[Math.floor(Math.random() * tmpFOElist.length)];
          randomItem.placement = placement;
          randomizedBoard.push(randomItem);
          const FOEfilter = tmpFOElist.filter(item => item !== randomItem);
          tmpFOElist = FOEfilter;
        }
      }
      const newFOElist3 = state.FOElist.map(item => {
        return randomizedBoard.find(i => i.id === item.id)
          ? randomizedBoard.find(i => i.id === item.id)
          : { ...item, placement: "pool", isChecked: false };
      });
      return { ...state, FOElist: newFOElist3 };

    case UPDATE_PLACEMENT:
      return { ...state, dragOverPlacement: action.placement };

    case UPDATE_FILTER:
      let filter = state.filter.map(item => item);
      if (filter.includes(action.filterItem)) {
        filter = state.filter.filter(item => item !== action.filterItem);
      } else {
        filter.push(action.filterItem);
      }
      return { ...state, filter };

    case BOARD_LOADED_FROM_URL:
      const localFOE = state.FOElist.slice();

      for (const { placement, identifier } of action.placements) {
        const FOEIndex = localFOE.findIndex(it => it.id === identifier);

        if (FOEIndex === -1) {
          localFOE.push({
            id: uuidv4(),
            isChecked: false,
            placement,
            title: identifier,
            tags: []
          });
        } else {
          localFOE[FOEIndex] = { ...localFOE[FOEIndex], placement };
        }
      }
      return { ...state, FOElist: localFOE, boardSize:action.boardSize };

    default:
      return { ...state };
  }
}

function sneakyReducer(state, action) {
  const newState = reducer(state, action);

  window.localStorage.setItem(STATE_KEY, JSON.stringify(newState));

  return newState;
}
