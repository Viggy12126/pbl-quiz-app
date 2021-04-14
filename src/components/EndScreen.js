import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from '../helpers/Contexts';
import { Questions } from "../helpers/Questions";

const EndScreen=()=>{
    const {score,setScore,gameState,setGameState}=useContext(GameStateContext);
    return(
<div className="Endscreen">

    <h1>Quiz finished</h1>
   <h1>{score}/{Questions.length}</h1>
   <h1>The correct answers are:</h1>
   <div>
       {Questions.map((question)=>(
        <button>
        {question.correct}
        </button>
       ))}
       
   </div>

</div>
    ) 
}

export default EndScreen;