import axios from "axios";

const MAX_RANKER = 10; // 랭킹 저장 수

const RankHelper = {
  MAX_RANKER: 10, // 랭킹 저장 수
  getRecordList: async gameType => {
    const data = await axios.get(
      `https://pluspang-default-rtdb.firebaseio.com/${gameType}.json`
    );

    if (!data.data) {
      return [];
    }

    let arr = [];
    for (const [key, value] of Object.entries(data.data)) {
      arr.push({
        name: key,
        record: value
      });
    }

    if (gameType === "1to20") {
      arr = arr.sort((a, b) => a.record - b.record);
    } else {
      arr = arr.sort((a, b) => b.record - a.record);
    }

    return arr.slice(0, MAX_RANKER);
  }
};

export default RankHelper;
