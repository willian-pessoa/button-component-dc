import React from "react";
import Icon from "../Icon/Icon";

import "./Button.scss";

const Button = ({
  variant,
  disableShadow,
  size,
  color,
  disabled,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant || "default"} ${
        disableShadow && "disableShadow"
      } size-${size || "md"} color-${color || "default"}`}
      disabled={disabled}
      {...props}
    >
      {startIcon ? (
        <>
          <Icon icon={startIcon} /> {props.children}
        </>
      ) : endIcon ? (
        <>
          {props.children} <Icon icon={endIcon} />
        </>
      ) : (
        props.children
      )}
    </button>
  );
};

export default Button;
