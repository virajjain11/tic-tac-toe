
import { useState , useEffect} from 'react';
import './index';
import SquareComponent from './SquareComponent';


function App() {
  const initialState = ['','','','','','','','',''];
  const[gameState, updateGameState]= useState(()=>initialState)
  const[isX, updateIsX]= useState(false);
const squareClicked=(index)=>{
  let strings = Array.from(gameState)
  strings[index]= isX?"X":"0"
  updateGameState(strings)
  updateIsX(!isX);
}

const calculateWinner=()=> {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a];
    }
  }
  return null;
}

useEffect(()=>{
const winner = calculateWinner();
if(winner){
  alert("Yayyy!..."`${winner}`+" is the winner")
  updateGameState(initialState)
}
}, [gameState])



  return (
    <div className="App">
      <header className="app-header">
        <p className='heading-text'>tic-tac-toe</p>
        <div className='row jc-center'>
          <SquareComponent className =" b-bottom-right" state ={gameState[0]} onClick ={()=>squareClicked(0)}/>
          <SquareComponent className =" b-bottom-right" state ={gameState[1]} onClick ={()=>squareClicked(1)}/>
          <SquareComponent className="b-bottom" state ={gameState[2]} onClick ={()=>squareClicked(2)}/>
          

        </div>
        <div className='row jc-center'>
        <SquareComponent className =" b-bottom-right" state ={gameState[3]} onClick ={()=>squareClicked(3)}/>
        <SquareComponent className =" b-bottom-right" state ={gameState[4]} onClick ={()=>squareClicked(4)} />
        <SquareComponent className="b-bottom" state ={gameState[5]} onClick ={()=>squareClicked(5)}/>
        </div>
        <div className='row jc-center'>
        <SquareComponent className ="b-right " state ={gameState[6]} onClick ={()=>squareClicked(6)}/>
        <SquareComponent className ="b-right " state ={gameState[7]} onClick ={()=>squareClicked(7)}/>
        <SquareComponent state ={gameState[8]} onClick ={()=>squareClicked(8)}/>
        </div>
        <button className='fw-600 clear-button' onClick={()=>updateGameState(initialState)} > Restart Game</button>
      </header>

    </div>
  );
}

export default App;
