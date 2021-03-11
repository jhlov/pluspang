import React from "react";

const Cell = ({ value, index, onClickCell, onEnterCell }) => {
  return (
    <div
      className="cell"
      onMouseDown={() => onClickCell(index)}
      onMouseEnter={() => onEnterCell(index)}
    >
      {value}
    </div>
  );
};

export default Cell;
