// src/components/Scoreboard.jsx
import React from 'react';

const Scoreboard = ({ scores }) => {
  return (
    <div className="scoreboard">
      <div className="score">
        <span className="player blue">Blue:</span> {scores.blue}
      </div>
      <div className="score">
        <span className="player red">Red:</span> {scores.red}
      </div>
    </div>
  );
};

export default Scoreboard;
