import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';

// Styling for the extra elements
const style = {
  width: '200px',
  margin: '20px auto'
}

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    // Make copy of the state
    const boardCopy = [...board];
    // if winner has won or click is on an occupied square
    if (winner || boardCopy[i]) return;
    // return
    // Else put and X or O in the clicked square
    // Change value of isNext boolean for the next click
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const jumpTo = () => {

  };

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>START GAME</button>
  );
 
  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={style}>
        <p>
          {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}
        </p>
        {renderMoves()}
      </div>
    
    </>
  )
};

export default Game;