import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <div className="title none-drag">PLUSPANG</div>
      <Link to="/game/1to20" className="btn menu-item none-drag">
        1 TO 20
      </Link>
      <Link to="/game/random" className="btn menu-item none-drag">
        RANDOM
      </Link>
      <Link to="/rank" className="btn menu-item none-drag">
        RANK
      </Link>
      <Link to="/howto" className="btn menu-item none-drag">
        HOW TO
      </Link>
    </div>
  );
};

export default Menu;
