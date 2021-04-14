import Menu from './components/Menu'
import './App.css';
import {useState} from 'react';
import {GameStateContext} from './helpers/Contexts';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';

function App() {

const [gameState,setGameState]=useState("menu");
const [username,setUserName]=useState("");
const [score,setScore]=useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{gameState,setGameState,username,setUserName,score,setScore}}>
     {gameState==="menu" && <Menu />} 
     {gameState=="playing" && <Quiz />}
     {gameState=="finished" && <EndScreen />}
     </GameStateContext.Provider>
    </div>
  );
}

export default App;
