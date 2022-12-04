import React from "react";

import Button from "../Button/Button";

import "./Main.scss";

const Main = () => {
  return (
    <main className="main">
      <h3>Buttons</h3>
      <div className="main-variants">
        <div className="row-variant">
          <div className="cel-variant">
            <span className="describe-btn">{"<Button />"}</span>
            <Button>Default</Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{"&:hover, &:focus"}</span>
            <Button hover="hover-default">Default</Button>
          </div>
        </div>
        <div className="row-variant">
          <div className="cel-variant">
            <span className="describe-btn">
              {'<Button variant="outline" />'}
            </span>
            <Button variant="outline">Default</Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{"&:hover, &:focus"}</span>
            <Button hover="hover-outline" variant="outline">
              Default
            </Button>
          </div>
        </div>
        <div className="row-variant">
          <div className="cel-variant">
            <span className="describe-btn">{'<Button variant="text" />'}</span>
            <Button variant="text">Default</Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{"&:hover, &:focus"}</span>
            <Button hover="hover-text" variant="text">
              Default
            </Button>
          </div>
        </div>
        <div className="row-variant">
          <div className="cel-variant">
            <span className="describe-btn">{"<Button disableShadow />"}</span>
            <Button disableShadow>Default</Button>
          </div>
        </div>
        <div className="row-variant">
          <div className="cel-variant">
            <span className="describe-btn">{"<Button disabled />"}</span>
            <Button disabled>Default</Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">
              {'<Button variant="text" disabled />'}
            </span>
            <Button variant="text" disabled>
              Default
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
