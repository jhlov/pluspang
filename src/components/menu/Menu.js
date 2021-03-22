import "./Menu.scss";

import { Link } from "react-router-dom";
import React from "react";

const Menu = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <div className="title none-drag">PLUSPANG</div>
      <Link to="/game/1to20" className="btn menu-item none-drag">
        1 to 20
      </Link>
      <Link to="/game/random" className="btn menu-item none-drag">
        random
      </Link>
      <Link to="/rank" className="btn menu-item none-drag">
        rank
      </Link>
    </div>
  );
};

export default Menu;
