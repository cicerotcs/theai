import React from "react";

import "./Button.scss";

const Button = ({ title }) => {
  return (
    <button className="cta__button" type="button">
      {title}
    </button>
  );
};

export default Button;
