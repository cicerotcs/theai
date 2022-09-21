import React from "react";

import "./Feature.scss";

const Feature = ({ title, description }) => {
  return (
    <div>
      <span className="header_text">{title}</span>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
