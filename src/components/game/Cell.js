import React from "react";
import classNames from "classnames";
import { isBrowser } from "react-device-detect";

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
      onMouseDown={() => {
        if (isBrowser) {
          onClickCell(index);
        }
      }}
      onMouseEnter={() => {
        if (isBrowser) {
          onEnterCell(index);
        }
      }}
      onTouchStart={() => onClickCell(index)}
      onTouchMove={(e) => onTouchMove(e)}
      onTouchEnd={onMouseUp}
    >
      {value}
    </div>
  );
};

export default Cell;
