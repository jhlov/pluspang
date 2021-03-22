const MAX_RANKER = 10; // 랭킹 저장 수

const RankHelper = {
  getRecordList: (gameType) => {
    if (gameType === "1to20") {
      return localStorage.getItem("1to20")
        ? JSON.parse(localStorage.getItem("1to20"))
        : [];
    } else {
      return localStorage.getItem("random")
        ? JSON.parse(localStorage.getItem("random"))
        : [];
    }
  },
  isNewRecord: (gameType, record) => {
    const recordList = RankHelper.getRecordList(gameType);
    if (gameType === "1to20") {
      return (
        recordList.length < MAX_RANKER ||
        record < recordList[recordList.length - 1].record
      );
    } else {
      return (
        recordList.length < MAX_RANKER ||
        recordList[recordList.length - 1].record < record
      );
    }
  },
  updateNewRecord: (gameType, name, record) => {
    let recordList = RankHelper.getRecordList(gameType);
    recordList.push({ name: name, record: record });
    if (gameType === "1to20") {
      recordList = recordList.sort((a, b) => a.record - b.record);
    } else {
      recordList = recordList.sort((a, b) => b.record - a.record);
    }

    localStorage.setItem(
      gameType,
      JSON.stringify(recordList.slice(0, MAX_RANKER))
    );
  }
};

export default RankHelper;
