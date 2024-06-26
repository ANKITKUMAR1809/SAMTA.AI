// src/components/Square.jsx
import React from 'react';

const Square = ({ value, onClick, color }) => {
  return (
    <button className={`square ${color}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
