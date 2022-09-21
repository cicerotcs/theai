import React from "react";

import "./Features.scss";

import Feature from "../../components/Feature/Feature";

import Button from "../../components/CTA_BUTTON/Button";

const features = [
  {
    title: "Improving and distrusts instantly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nostrum?",
  },
  {
    title: "Improving and distrusts instantly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nostrum?",
  },
  {
    title: "Improving and distrusts instantly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nostrum?",
  },
  {
    title: "Improving and distrusts instantly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nostrum?",
  },
];

const Features = () => {
  return (
    <section id="technology">
      <div className="features">
        <h2 className="gradient__text">the real estate future is now.</h2>
        <div className="features__feature">
          {features.map((feature, index) => (
            <Feature
              title={feature.title}
              description={feature.description}
              key={index}
            />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Button title="Get Started Now" />
        </div>
      </div>
    </section>
  );
};

export default Features;
