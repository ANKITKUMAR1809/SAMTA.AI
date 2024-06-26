
import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square.value}
          onClick={() => onClick(i)}
          color={square.color}
        />
      ))}
    </div>
  );
};

export default Board;
