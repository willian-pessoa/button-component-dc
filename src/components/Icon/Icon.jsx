import React from "react";

const ICONS = {
  download: "assets/download.svg",
  favorite: "assets/favorite.svg",
  file_open: "assets/file_open.svg",
  shopping_cart: "assets/shopping_cart.svg",
  star: "assets/star.svg",
};

const Icon = (props) => {
  return (
    <img
      src={ICONS[props.icon]}
      alt={props.icon}
      style={{ height: "16px", widht: "16px" }}
    />
  );
};

export default Icon;
