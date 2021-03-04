import "./Menu.scss";

import React from "react";

const Menu = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <div className="title">PLUSPANG</div>
      <button className="menu-item">1 to 20</button>
      <button className="menu-item">random</button>
      <button className="menu-item">rank</button>
    </div>
  );
};

export default Menu;
