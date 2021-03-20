import React from "react";
import classNames from "classnames";

const Cell = ({
  value,
  index,
  clicked,
  onClickCell,
  onEnterCell,
  onTouchMove,
  onMouseUp,
  isAnswer
}) => {
  return (
    <div
      className={classNames(`cell value${value}`, { clicked, isAnswer })}
      onMouseDown={() => onClickCell(index)}
      onMouseEnter={() => onEnterCell(index)}
      onTouchStart={() => onClickCell(index)}
      onTouchMove={(e) => onTouchMove(e)}
      onTouchEnd={onMouseUp}
    >
      {value}
    </div>
  );
};

export default Cell;
