import "./Menu.scss";

import { Link } from "react-router-dom";
import React from "react";

const Menu = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <div className="title">PLUSPANG</div>
      <Link to="/game" className="menu-item">
        1 to 20
      </Link>
      <Link to="/game" className="menu-item">
        random
      </Link>
      <Link to="/rank" className="menu-item">
        rank
      </Link>
    </div>
  );
};

export default Menu;
