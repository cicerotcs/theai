import React from "react";

import "./Possibility.scss";

import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <section id="education">
      <div className="possibilities">
        <div className="possibilities__img">
          <img src={possibility} alt="AI possibilities" />
        </div>
        <div className="possibilities__desc">
          <h2 className="gradient__text">
            The possibilities are beyound your imagination
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio
            nostrum minima placeat unde iste molestiae amet nemo natus quae!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Possibility;
