import React from "react";
import classNames from "classnames";

const Cell = ({ value, index, clicked, onClickCell, onEnterCell }) => {
  return (
    <div
      className={classNames("cell", { clicked })}
      onMouseDown={() => onClickCell(index)}
      onMouseEnter={() => onEnterCell(index)}
    >
      {value}
    </div>
  );
};

export default Cell;
