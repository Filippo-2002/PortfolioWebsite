import React from "react";
import '../Styles/playerStats.css';

const PlayerStats = () => {
  return (
    <div id="playerStats">
      <h1>Filippo de Cristofaro - Lvl. 31</h1>
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>
      <h2>Fullstack Developer</h2>
    </div>
  );
};

export default PlayerStats;