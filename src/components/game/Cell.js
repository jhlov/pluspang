import React from "react";

const Cell = ({ value, index, onClickCell }) => {
  return (
    <div className="cell" onClick={() => onClickCell(index)}>
      {value}
    </div>
  );
};

export default Cell;
