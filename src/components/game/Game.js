import "./Game.scss";

import React, { useCallback, useEffect, useState } from "react";

import Cell from "components/game/Cell";

const Game = () => {
  // 숫자판
  const [numberList, setNumberList] = useState([]);

  // 현재 드래그 중인지 체크
  const [isDrag, setIsDrag] = useState(false);

  // 현재 드래그 중인 cell 인덱스 리스트
  const [dragCellList, setDragCellList] = useState([]);

  // 목표 숫자
  const [targetNumber, setTargetNumber] = useState("");

  // 최초 설정
  useEffect(() => {
    let arr = new Array(25);
    for (let i = 0; i < arr.length; ++i) {
      arr[i] = getCellNumber();
    }
    setNumberList(arr);
    setTargetNumber(getTargetNumber());
  }, []);

  const getCellNumber = () => {
    // 작은 숫자가 많이 나오도록
    const arr = [1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
    return arr[parseInt(Math.random() * arr.length)];
  };

  const getTargetNumber = () => {
    return parseInt(Math.random() * 5) + 1;
  };

  const getDragCellSum = () => {
    return dragCellList.reduce(
      (accumulator, currentValue) => accumulator + numberList[currentValue],
      0
    );
  };

  const processDrag = (index) => {
    if (!dragCellList.includes(index)) {
      console.log("processDrag", index);
      setDragCellList([index, ...dragCellList]);
    }
  };

  const onClickCell = useCallback((index) => {
    console.log("onClickCell", index);
    setIsDrag(true);
    processDrag(index);
  }, []);

  const onEnterCell = useCallback(
    (index) => {
      if (isDrag) {
        console.log("onEnterCell", index);
        processDrag(index);
      }
    },
    [isDrag, dragCellList]
  );

  const onMouseUp = () => {
    console.log("onMouseUp");
    console.log(dragCellList, getDragCellSum());

    // TODO: 정답 체크

    setIsDrag(false);
    setDragCellList([]);
  };

  return (
    <div onMouseUp={onMouseUp}>
      {/* 상단 */}
      <div className="d-flex">
        <div className="flex-4">
          <div className="card">
            <div className="card-header">TARGET NUMBER</div>
            <div className="card-body">{targetNumber}</div>
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
          <Cell
            value={number}
            key={index}
            index={index}
            clicked={dragCellList.includes(index)}
            onClickCell={onClickCell}
            onEnterCell={onEnterCell}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
