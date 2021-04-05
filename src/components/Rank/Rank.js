import React, { useState } from "react";
import { Link } from "react-router-dom";
import RankHelper from "scripts/RankHelper";
import "./Rank.scss";

const Rank = () => {
  const [oneto20RankList, set1to20RankList] = useState(
    RankHelper.getRecordList("1to20")
  );
  const [randomRankList, setRandomRankList] = useState(
    RankHelper.getRecordList("random")
  );

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const onClickReset = () => {
    if (window.confirm("정말 초기화 하시겠습니가?")) {
      RankHelper.reset();
      set1to20RankList([]);
      setRandomRankList([]);
    }
  };

  return (
    <div className="px-40">
      <h2>1 TO 20</h2>
      <ul className="mb-20">
        {oneto20RankList.map((e, index) => (
          <li className="d-flex">
            <span>{index + 1}. </span>
            <span className="name"> {e.name}</span>{" "}
            <span className="ml-auto">{e.record}초</span>
          </li>
        ))}
        {oneto20RankList.length === 0 && <p>기록이 없습니다.</p>}
      </ul>

      <h2>RANDOM</h2>
      <ul className="mb-20">
        {randomRankList.map((e, index) => (
          <li className="d-flex">
            {index + 1}. <span className="name ml-20"> {e.name}</span>{" "}
            <span className="ml-auto">{numberWithCommas(e.record)}점</span>
          </li>
        ))}
        {randomRankList.length === 0 && <p>기록이 없습니다.</p>}
      </ul>

      <div className="btn-group">
        <Link to="/" className="btn mb-8">
          메뉴
        </Link>
        <button className="btn" onClick={onClickReset}>
          초기화
        </button>
      </div>
    </div>
  );
};

export default Rank;
