import Cell from "components/game/Cell";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import RankHelper from "scripts/RankHelper";
import "./Game.scss";

const Game = ({ history }) => {
  const LAST_TARGET_1TO20 = 20;
  const RANDOM_TIME = 60;

  // 숫자판
  const [numberList, setNumberList] = useState([]);

  // 보드 ref
  const boardRef = useRef();

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
  const scoreRef = useRef(score);
  scoreRef.current = score;

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

    let timerId = setInterval(updateTime, 50);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const updateTime = () => {
    const deltaTime = (Date.now() - startTime) / 1000;
    if (gameType === "1to20") {
      setCurTime(deltaTime);
    } else {
      let newTime = Math.max(0, RANDOM_TIME - deltaTime);
      setCurTime(newTime);

      // 종료 처리
      if (newTime === 0) {
        if (
          0 < scoreRef.current &&
          RankHelper.isNewRecord(gameType, scoreRef.current)
        ) {
          const name = prompt(
            `기록갱신\n\n${scoreRef.current}점!!\n\n이름을 등록해 주세요`,
            localStorage.getItem("name") ?? ""
          );

          if (name) {
            localStorage.setItem("name", name);
            RankHelper.updateNewRecord(gameType, name, scoreRef.current);
          }
        } else {
          alert(`GAME OVER!!\n\n${numberWithCommas(scoreRef.current)}점!!`);
        }

        history.push("/");
      }
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
      let min = 0;
      let max = 0;

      if (score < 2000) {
        min = 4;
        max = 9;
      } else if (score < 4000) {
        min = 5;
        max = 10;
      } else if (score < 6000) {
        min = 5;
        max = 13;
      } else if (score < 8000) {
        min = 6;
        max = 14;
      } else {
        min = 6;
        max = 15;
      }

      while (true) {
        const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (newNumber !== targetNumber) {
          return newNumber;
        }
      }
    }
  };

  const getDragCellSum = () => {
    return dragCellList.reduce(
      (accumulator, currentValue) => accumulator + numberList[currentValue],
      0
    );
  };

  const processDrag = index => {
    if (!dragCellList.includes(index)) {
      console.log("processDrag", index);
      setDragCellList([index, ...dragCellList]);
    }
  };

  /**
   * 정답이 맞는지 확인 및 처리
   */
  const checkAnswer = useCallback(() => {
    if (targetNumber === getDragCellSum()) {
      console.log("정답");

      // 정답 리스트 업데이트
      setAnswerCellList([...dragCellList]);
      setTimeout(() => {
        setAnswerCellList([]);
      }, 200);

      // 타겟 넘버 업데이트
      const newTargetNum = getTargetNumber();
      setTargetNumber(newTargetNum);

      // 맞힌 숫자 변경
      const newNumberList = [...numberList];
      for (let i = 0; i < dragCellList.length; ++i) {
        newNumberList[dragCellList[i]] = getCellNumber();
      }
      setNumberList(newNumberList);

      if (gameType === "1to20") {
        // 종료 체크
        if (LAST_TARGET_1TO20 < newTargetNum) {
          // 기록
          if (RankHelper.isNewRecord(gameType, curTime.toFixed(2))) {
            const name = prompt(
              `기록갱신\n\n${curTime.toFixed(2)}초!!\n\n이름을 등록해 주세요`,
              localStorage.getItem("name") ?? ""
            );

            if (name) {
              localStorage.setItem("name", name);
              RankHelper.updateNewRecord(gameType, name, curTime.toFixed(2));
            }
          } else {
            alert(`GAME OVER!!\n\n${curTime.toFixed(2)}초!!`);
          }

          history.push("/");
        }
      } else {
        setScore(score + 100 * dragCellList.length);
      }
    } else {
      console.log("오답");
    }
  });

  const onClickCell = useCallback(index => {
    console.log("onClickCell", index);
    setIsDrag(true);
    processDrag(index);
  }, []);

  const onEnterCell = useCallback(
    index => {
      if (isDrag) {
        console.log("onEnterCell", index);
        processDrag(index);
      }
    },
    [isDrag, dragCellList]
  );

  const onTouchMove = useCallback(e => {
    if (isDrag) {
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;

      for (let i = 0; i < boardRef.current.children.length; ++i) {
        const child = boardRef.current.children[i];
        const childX = child.getBoundingClientRect().x;
        const width = child.getBoundingClientRect().width;
        const childY = child.getBoundingClientRect().y;

        if (
          childX <= x &&
          x <= childX + width &&
          childY < y &&
          y < childY + width
        ) {
          processDrag(i);
          break;
        }
      }
    }
  });

  const onMouseUp = () => {
    console.log("onMouseUp");
    console.log(dragCellList, getDragCellSum());

    // 정답 체크
    checkAnswer();

    setIsDrag(false);
    setDragCellList([]);
  };

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div onMouseUp={onMouseUp}>
      {/* 상단 */}
      <div className="card card-number mb-20 none-drag">
        <div className="card-header">TARGET NUMBER</div>
        <div className="card-body">{targetNumber}</div>
      </div>
      <div className="d-flex justify-content-flex-end">
        <div className="card none-drag">
          <div className="card-header">TIME</div>
          <div className="card-body">{curTime.toFixed(2)}</div>
        </div>
        {gameType === "1to20" && (
          <div className="card none-drag">
            <div className="card-header">BEST-TIME</div>
            <div className="card-body">
              {RankHelper.getBestRecord(gameType)}
            </div>
          </div>
        )}
        {gameType === "random" && (
          <div className="card none-drag">
            <div className="card-header">SCORE</div>
            <div className="card-body">{numberWithCommas(score)}</div>
          </div>
        )}
        {gameType === "random" && (
          <div className="card none-drag">
            <div className="card-header">
              BEST
              <br />
              SCORE
            </div>
            <div className="card-body">
              {RankHelper.getBestRecord(gameType)}
            </div>
          </div>
        )}
      </div>

      {/* 하단 */}
      <div className="board-wrapper1">
        <div className="board-wrapper2">
          <div className="board" ref={boardRef}>
            {numberList.map((number, index) => (
              <Cell
                value={number}
                key={index}
                index={index}
                clicked={dragCellList.includes(index)}
                isAnswer={answerCellList.includes(index)}
                onClickCell={onClickCell}
                onEnterCell={onEnterCell}
                onTouchMove={onTouchMove}
                onMouseUp={onMouseUp}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
