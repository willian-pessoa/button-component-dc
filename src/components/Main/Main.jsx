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
            <span className="describe-btn">
              {'<Button variant="outline" />'}
            </span>
            <Button variant="outline">Default</Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{'<Button variant="text" />'}</span>
            <Button variant="text">Default</Button>
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
            <Button disabled>Disabled</Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">
              {'<Button variant="text" disabled />'}
            </span>
            <Button variant="text" disabled>
              Disabled
            </Button>
          </div>
        </div>
        <div className="row-variant">
          <div className="cel-variant">
            <span className="describe-btn">
              {'<Button startIcon="favorite" />'}
            </span>
            <Button startIcon="favorite">Default</Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">
              {'<Button endIcon="download" />'}
            </span>
            <Button endIcon="download">Default</Button>
          </div>
        </div>
        <div className="row-variant">
          <div className="cel-variant">
            <span className="describe-btn">{'<Button size="sm" />'}</span>
            <Button size="sm">Default</Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{'<Button size="md" />'}</span>
            <Button size="md">Default</Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{'<Button size="lg" />'}</span>
            <Button size="lg">Default</Button>
          </div>
        </div>
        <div className="row-variant">
          <div className="cel-variant">
            <span className="describe-btn">{'color="default"'}</span>
            <Button color="default">Default</Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{'color="primary"'}</span>
            <Button color="primary">Primary</Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{'color="secondary"'}</span>
            <Button color="secondary">Secondary</Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{'color="danger"'}</span>
            <Button color="danger">Danger</Button>
          </div>
        </div>
        <div className="row-variant">
          <div className="cel-variant">
            <span className="describe-btn">{'variant="outline"'}</span>
            <Button variant="outline" color="default">
              Default
            </Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{'variant="outline"'}</span>
            <Button variant="outline" color="primary">
              Primary
            </Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{'variant="outline"'}</span>
            <Button variant="outline" color="secondary">
              Secondary
            </Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{'variant="outline"'}</span>
            <Button variant="outline" color="danger">
              Danger
            </Button>
          </div>
        </div>
        <div className="row-variant">
          <div className="cel-variant">
            <span className="describe-btn">{'variant="text"'}</span>
            <Button variant="text" color="default">
              Default
            </Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{'variant="text"'}</span>
            <Button variant="text" color="primary">
              Primary
            </Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{'variant="text"'}</span>
            <Button variant="text" color="secondary">
              Secondary
            </Button>
          </div>
          <div className="cel-variant">
            <span className="describe-btn">{'variant="text"'}</span>
            <Button variant="text" color="danger">
              Danger
            </Button>
          </div>
        </div>
      </div>
      <p className="p-footer">
        Icons: https://material.io/resources/icons/?style=round
      </p>
      <p className="p-footer" style={{ fontSize: "14px" }}>
        created by Willian Pessoa - devChallenges.io
      </p>
    </main>
  );
};

export default Main;
