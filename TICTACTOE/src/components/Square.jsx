// its for square button giving the input as X or O
import React from 'react';
// value = X or O , color = blue or Red
const Square = ({ value, onClick, color }) => {
  return (
    <button className={`square ${color}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
