import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';
import './App.css';

const initialSquares = Array(9).fill({ value: null, color: '' });

const App = () => {
  const [squares, setSquares] = useState(initialSquares);
  const [isBlueNext, setIsBlueNext] = useState(true);
  const [scores, setScores] = useState(() => {
    const savedScores = JSON.parse(localStorage.getItem('tic-tac-toe-scores'));
    return savedScores || { blue: 0, red: 0 };
  });
  const [gameOver, setGameOver] = useState(false);

  // Save scores to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tic-tac-toe-scores', JSON.stringify(scores));
  }, [scores]);

  const handleClick = (i) => {
    if (squares[i].value || gameOver) return;

    const newSquares = squares.slice();
    newSquares[i] = {
      value: isBlueNext ? 'X' : 'O',
      color: isBlueNext ? 'blue' : 'red',
    };

    setSquares(newSquares);
    setIsBlueNext(!isBlueNext);
    const winner = calculateWinner(newSquares);

    if (winner) {
      const newScores = { ...scores };
      if (winner.color === 'blue') {
        newScores.blue += 10;
      } else {
        newScores.red += 10;
      }
      setScores(newScores);
      setGameOver(true);
      setTimeout(() => {
        setSquares(initialSquares);
        setGameOver(false);
      }, 2000); // reset board after 2 seconds
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
        return squares[a];
      }
    }
    return null;
  };

  const handleReset = () => {
    setSquares(initialSquares);
    setScores({ blue: 0, red: 0 });
    localStorage.setItem('tic-tac-toe-scores', JSON.stringify({ blue: 0, red: 0 }));
    setGameOver(false);
  };

  return (
    <div className='home'>
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <Scoreboard scores={scores} />
      <Board squares={squares} onClick={handleClick} />
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
    </div>
  );
};

export default App;
