import React from "react";

const Game = () => {
  return (
    <div className="p-20">
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
    </div>
  );
};

export default Game;
