import React from "react";

import "./Blog.scss";

import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";

import Article from "../../components/Article/Article";

const blog = [
  {
    img: blog01,
    title: "The first title",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, impedit?",
  },
  {
    img: blog02,
    title: "The second title",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, impedit?",
  },
  {
    img: blog03,
    title: "The third title",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, impedit?",
  },
  {
    img: blog04,
    title: "The fourth title",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, impedit?",
  },
  {
    img: blog05,
    title: "The fifth title",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, impedit?",
  },
];

const Blog = () => {
  return (
    <section id="blog">
      <div className="blog">
        <h2 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h2>
        <div className="blog__grid">
          {blog.map((item, index) => (
            <Article
              img={item.img}
              title={item.title}
              desc={item.desc}
              className={`item-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
