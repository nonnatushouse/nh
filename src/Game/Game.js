import React, { useReducer } from "react";
import useInterval from "../useInterval";
import "./Game.css";
import ProducerList from "./ProducerList";
import getProducers from "./Producers";
import buildProducerStates from "./helpers";
import CountDisplay from "./CountDisplay";

import doctor from './assets/doctor.png';
import nun from "./assets/nun.png";
import midwife from "./assets/midwife.png"
import maternity from "./assets/maternity.png"
import nh from "./assets/nh.png"
import poplar from "./assets/poplar.png"
import london from "./assets/london.png"
import uk from "./assets/uk.png"
import europe from "./assets/europe.png"
import world from "./assets/world.png"

import classNames from "classnames";

import InfoBox from "./InfoBox";
import WinScreen from "./WinScreen";
import TextStrip from "./TextStrip";


const DELAY = 100;
                  
const WIN_COUNT = 1000000000;  // 1000000000    

const BUY_MULTIPLYER = 1.1;

const IMAGES = {doctor, nun, midwife, maternity, nh, poplar, london, uk, europe, world}


const initialState = {
  gameLoop: 0,
  count: 0,
  totalCount: 0,
  producerStates: buildProducerStates(getProducers(IMAGES)),
  producerQueue: buildProducerStates(getProducers(IMAGES)),
  manualClicks: [0,0,0,0,0,0,0,0,0,0],
  showInfoBox: true,
  showWinBox: false,
  hasWon: false,
  startTime: new Date(),
  endTime: new Date()

};

let allProducers = getProducers(IMAGES);

export default function Game() {
    const [state, dispatch] = useReducer(reducer, initialState);

    
    useInterval(
        () => {dispatch({type: "GameTick"})},
        DELAY

    )

    function onProducerClick(producer) {
      dispatch({type: "AddProducer", producer: producer.id})
    }

    function updateShowInfoBox(show) {
      dispatch({type: "ShowInfoBox", show: show})
    }

    const gameContainerCls = classNames("game-container", {
      "overlay-active": state.showInfoBox || state.showWinBox
    });

    return (
        
      <>
      <div className="info-icon" onClick={() => updateShowInfoBox(true)}>i</div>
      
      <div className={gameContainerCls}>
               <CountDisplay
          count={state.count}
          totalCount={state.totalCount}
          manualClicks={state.manualClicks}
          allProducers={allProducers}
          />
        <div className="deliverButton" onClick={() => dispatch({type: "AddCount"})}
      >
        Deliver a baby
      </div>

      <TextStrip
      totalCount={state.totalCount} 
      count={state.count}
      allProducers={allProducers}
      startTime={state.startTime}
      />

      <ProducerList
        count={state.count} 
        onProducerClick={(producer) => onProducerClick(producer)}
        producers = {allProducers} // allProducers.filter((producer) => producer.unlocked )
      
      />  

      </div>

      <InfoBox 
        totalCount={state.totalCount}
        showInfoBox={state.showInfoBox}
        totalTime={state.endTime - state.startTime}
        onClickReset={() => dispatch({type: "Reset"})}
        onClickExit={(show) => updateShowInfoBox(show) }/>

      <WinScreen 
        hasWon={state.showWinBox}
        totalTime={state.endTime - state.startTime}
        onClickReset={() => dispatch({type: "Reset"})}
        onClickExit={(show) => {dispatch({type: "DiscardWin"})}}/>

      </>
      
    );

}

function reducer(state, action) {
    switch (action.type) {
        case "AddCount":
          let manualClicks = state.manualClicks;
          manualClicks[(state.gameLoop + 10) % 10] += 1
          return { ...state, count: state.count+1, totalCount: state.totalCount+1, manualClicks };

        case "Reset":
            allProducers = getProducers(IMAGES);
            return {   gameLoop: 0, count: 0, totalCount: 0, producerStates: buildProducerStates(getProducers(IMAGES)),
              producerQueue: buildProducerStates(getProducers(IMAGES)), manualClicks:[0,0,0,0,0,0,0,0,0,0], 
              showInfoBox: false, hasWon: false, startTime: new Date(), endTime: new Date()};      
    
        case "GameTick":
          let cpy = state.producerStates.map((s) => s)
          let newCount = state.count;
          let newTotalCount = state.totalCount
          for (let i = 0; i < allProducers.length; i++) {
            newCount += cpy[state.gameLoop][i] * allProducers[i].bps;
            newTotalCount += cpy[state.gameLoop][i] * allProducers[i].bps;
            cpy[state.gameLoop][i] += state.producerQueue[state.gameLoop][i];
            if (state.count >= allProducers[i].cost / 2) {
              allProducers[i].unlocked = true;
            }
          } 
          let mc = state.manualClicks 
          let gameLoop = (state.gameLoop + 1) % 10;
          mc[gameLoop] = 0

          let won = state.hasWon;
          let showWon = state.showWinBox;
          let endTime = state.endTime;
          if (state.count >= WIN_COUNT && !state.hasWon) {
            won = true;
            showWon = true;
            endTime = new Date();
          }

          return { ...state, manualClicks:mc, gameLoop: gameLoop, producerStates: cpy, 
            producerQueue: buildProducerStates(getProducers(IMAGES)), count: newCount, totalCount: newTotalCount,
            hasWon: won, showWinBox: showWon, endTime:endTime }; 
            
        case "AddProducer":
          let newQueue = state.producerQueue;
          let producerCost = allProducers[action.producer].cost;
          let newCnt = state.count;
          if (state.count >= producerCost) {
            newCnt -= producerCost;
            allProducers[action.producer].howManyBought += 1
            newQueue[state.gameLoop][action.producer] = newQueue[state.gameLoop][action.producer] + 1
            allProducers[action.producer].cost = Math.ceil(producerCost * BUY_MULTIPLYER);
          }
          return { ...state, count: newCnt, producerQueue: newQueue };            
           
        case "ShowInfoBox":
          return {...state, showInfoBox: action.show}

        case "DiscardWin":
          return {...state, showWinBox: false}

        default:
          return {...state}
            
    }    
}
