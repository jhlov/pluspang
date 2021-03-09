import "./Game.scss";

import Cell from "components/game/Cell";
import React from "react";

const Game = () => {
  return (
    <div>
      {/* 상단 */}
      <div className="d-flex">
        <div className="flex-4">
          <div className="card">
            <div className="card-header">TARGET NUMBER</div>
            <div className="card-body">1</div>
          </div>
        </div>

        <div className="flex-1">
          <div className="card">
            <div className="card-header">TIME</div>
            <div className="card-body">10.22</div>
          </div>
          <div className="card">
            <div className="card-header">BEST</div>
            <div className="card-body">10.22</div>
          </div>
        </div>
      </div>

      {/* 하단 */}
      <div className="board mt-40">
        <Cell value={1} />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};

export default Game;
