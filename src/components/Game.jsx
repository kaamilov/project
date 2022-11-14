import React from "react";
import "./Game.css";
const Game = ({ question, onClickVariant, step,PEAKSOFT }) => {
    const parcentage = Math.round((step / PEAKSOFT.length) * 100)
    
  return (
    <div className="game">
      <div className="progres">
        <div style={{ width: `${parcentage}%` }} className="progres2"></div>
      </div>

      <h1>{question.title}</h1>
      <ul>
        {
            question.variants.map((item,index)=>{
                return <li key={item} onClick={()=>onClickVariant(index)}>{item}</li>
            })
            }
      </ul>
    </div>
  );
};

export default Game;
