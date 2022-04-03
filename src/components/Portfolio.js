import React, { useEffect, useState } from "react";
import video from "./images/csstextformatter.mp4";

const FEATURED = [
  {
    title: "Hush Chat",
    class: "hush-chat",
    about:
      "Some text about Hush Chat Some text about Hush Chat Some text about Hush Chat Some text about Hush Chat Some text about Hush Chat",
    tools: ["React", "Express", "Wesockets"],
  },
  {
    title: "Hush Chat",
    class: "hush-chat",
    about:
      "Some text about Hush Chat Some text about Hush Chat Some text about Hush Chat Some text about Hush Chat Some text about Hush Chat",
    tools: ["React", "Express", "Wesockets"],
  },
  {
    title: "Hush Chat",
    class: "hush-chat",
    about:
      "Some text about Hush Chat Some text about Hush Chat Some text about Hush Chat Some text about Hush Chat Some text about Hush Chat",
    tools: ["React", "Express", "Wesockets"],
  },
  {
    title: "Hush Chat",
    class: "hush-chat",
    about:
      "Some text about Hush Chat Some text about Hush Chat Some text about Hush Chat Some text about Hush Chat Some text about Hush Chat",
    tools: ["React", "Express", "Wesockets"],
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="featured-works">
        {/* <p className="text-large">Featured Works</p> */}
        {FEATURED.map((item) => {
          return (
            <div className="featured-work">
              <video autoPlay loop muted playsinline>
                <source src={video} type="video/ogg" />
                <img src={"https://picsum.photos/1200/700"} />
              </video>
              {/* <img src={"https://picsum.photos/1200/700"} /> */}
              <div className="text-content-overlay"></div>
              <div className="text-content w3-col l6 m6 s12">
                <p className="text-large">{item.title}</p>
                <p className="text-small container">{item.about}</p>
                <p className="text-small tools">
                  {item.tools.map((tool) => {
                    return <span>{tool}</span>;
                  })}
                </p>
                <p className="text-medium icons container">
                  <i class="fa-brands fa-github"></i>
                  <i class="fa-solid fa-up-right-from-square"></i>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
