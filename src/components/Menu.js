import '../App.css';
import { useContext } from "react";
import { GameStateContext } from '../helpers/Contexts';

function Menu(){
    const {gameState,setGameState,username,setUserName}=useContext(GameStateContext);
   return(
    <div className="Menu">
        <input type="text" placeholder="Ex..Vighnesh Hegde" onChange={(event)=>{
            setUserName(event.target.value);
        }}/>
        <button onClick={()=>{
            setGameState('playing');
        }}>Start Quiz</button>

    </div>
   ) 
}

export default Menu;