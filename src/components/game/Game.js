import "./Game.scss";

import React, { useEffect, useState } from "react";

import Cell from "components/game/Cell";

const Game = () => {
  // 숫자판
  const [numberList, setNumberList] = useState([]);

  useEffect(() => {
    let arr = new Array(25);
    for (let i = 0; i < arr.length; ++i) {
      arr[i] = getRandomNumber();
    }

    setNumberList(arr);
  }, []);

  function getRandomNumber() {
    const arr = [1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
    return arr[parseInt(Math.random() * arr.length)];
  }

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
        {numberList.map((number, index) => (
          <Cell value={number} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Game;
