import React from "react";

import "./About.scss";

import Feature from "../../components/Feature/Feature";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__main">
        <span className="header_text">What is THEAI</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse
          minus repudiandae ratione aliquam adipisci eos aperiam ullam delectus
          itaque.
        </p>
      </div>
      <div className="about__possibility">
        <h2 className="gradient__text">
          Artificial Intelligence is Transforming the Real Estate Market
        </h2>
        <p className="gradient__text">Explore The Possibilities</p>
      </div>
      <div className="about__features">
        <Feature
          title="For clients"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptateodit!"
        />
        <Feature
          title="For agencies"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptateodit!"
        />
        <Feature
          title="Education"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptateodit!"
        />
      </div>
    </section>
  );
};

export default About;
