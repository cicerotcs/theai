import React from "react";

import "./Article.scss";

const Article = ({ img, title, desc, className }) => {
  return (
    <article className={className}>
      <img src={img} alt={title} style={{ width: "100%", height: "100%" }} />
      <div className="card__body">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </article>
  );
};

export default Article;
