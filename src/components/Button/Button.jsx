import React from "react";

import "./Button.scss";

const Button = (props) => {
  console.log(props.disabled)

  return (
    <button
      className={`btn btn-${props.variant || "default"} ${
        props.hover && props.hover
      } ${props.disableShadow && "disableShadow"}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
