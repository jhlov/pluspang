import "./Game.scss";

import React, { useCallback, useEffect, useState } from "react";

import Cell from "components/game/Cell";
import { useParams } from "react-router-dom";

const Game = ({ history }) => {
  // 숫자판
  const [numberList, setNumberList] = useState([]);

  // 시간
  const [startTime, setStartTime] = useState(Date.now());
  const [curTime, setCurTime] = useState(0);

  // 현재 드래그 중인지 체크
  const [isDrag, setIsDrag] = useState(false);

  // 현재 드래그 중인 cell 인덱스 리스트
  const [dragCellList, setDragCellList] = useState([]);

  // 정답을 맞춘 셀 리스트
  const [answerCellList, setAnswerCellList] = useState([]);

  // 목표 숫자
  const [targetNumber, setTargetNumber] = useState(0);

  // 점수
  const [score, setScore] = useState(0); // random 일 경우만

  // 타이머 id
  const [timerId, setTimerId] = useState(0);

  let { gameType } = useParams();

  // 최초 설정
  useEffect(() => {
    console.log("mounted");

    let arr = new Array(25);
    for (let i = 0; i < arr.length; ++i) {
      arr[i] = getCellNumber();
    }
    setNumberList(arr);
    setTargetNumber(getTargetNumber());

    setTimerId(setInterval(updateTime, 50));

    // TODO 게임종료 체크 인터벌
  }, []);

  const updateTime = () => {
    const deltaTime = (Date.now() - startTime) / 1000;
    if (gameType === "1to20") {
      setCurTime(deltaTime.toFixed(2));
    } else {
      setCurTime((60 - deltaTime).toFixed(2));
    }
  };

  const getCellNumber = () => {
    // 작은 숫자가 많이 나오도록
    const arr = [1, 1, 1, 2, 2, 3, 3, 4, 4];
    return arr[parseInt(Math.random() * arr.length)];
  };

  const getTargetNumber = () => {
    if (gameType === "1to20") {
      return targetNumber + 1;
    } else {
      return parseInt(Math.random() * 5) + 1;
    }
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

  /**
   * 정답이 맞는지 확인 및 처리
   */
  const checkAnswer = () => {
    if (targetNumber === getDragCellSum()) {
      console.log("정답");

      // 정답 리스트 업데이트
      setAnswerCellList([...dragCellList]);
      setTimeout(() => {
        setAnswerCellList([]);
      }, 200);

      // 타겟 넘버 업데이트
      setTargetNumber(getTargetNumber());

      console.log(targetNumber);

      // 맞힌 숫자 변경
      const newNumberList = [...numberList];
      for (let i = 0; i < dragCellList.length; ++i) {
        newNumberList[dragCellList[i]] = getCellNumber();
      }
      setNumberList(newNumberList);

      if (gameType === "1to20") {
        // 완료 처리
        if (19 < targetNumber) {
          // 타이머 종료
          clearInterval(timerId);

          // 기록
          alert(`GAME OVER!!\n\n${curTime}초!!`);

          history.push("/");
        }
      } else {
        //
      }
    } else {
      console.log("오답");
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

    // 정답 체크
    checkAnswer();

    setIsDrag(false);
    setDragCellList([]);
  };

  return (
    <div onMouseUp={onMouseUp}>
      {/* 상단 */}
      <div className="card card-number mb-20">
        <div className="card-header">TARGET NUMBER</div>
        <div className="card-body">{targetNumber}</div>
      </div>
      <div className="d-flex justify-content-flex-end">
        <div className="card">
          <div className="card-header">TIME</div>
          <div className="card-body">{curTime}</div>
        </div>
        {gameType === "1to20" && (
          <div className="card">
            <div className="card-header">BEST-TIME</div>
            <div className="card-body">{score}</div>
          </div>
        )}
        {gameType === "random" && (
          <div className="card">
            <div className="card-header">SCORE</div>
            <div className="card-body">{score}</div>
          </div>
        )}
        {gameType === "random" && (
          <div className="card">
            <div className="card-header">
              BEST
              <br />
              SCORE
            </div>
            <div className="card-body">{score}</div>
          </div>
        )}
      </div>

      {/* 하단 */}
      <div className="board">
        {numberList.map((number, index) => (
          <Cell
            value={number}
            key={index}
            index={index}
            clicked={dragCellList.includes(index)}
            isAnswer={answerCellList.includes(index)}
            onClickCell={onClickCell}
            onEnterCell={onEnterCell}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
