import React from "react";

import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="side-bar">
      <p className="title">
        Dev<span>challengs.io</span>
      </p>
      <ul className="content-side-bar">
        <li>Colors</li>
        <li>Typography</li>
        <li>Spaces</li>
        <li>Buttons</li>
        <li>Inputs</li>
        <li>Grid</li>
      </ul>
    </div>
  );
};

export default SideBar;
