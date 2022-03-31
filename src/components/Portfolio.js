import React from "react";

const FEATURED = [
  {
    title: "Hush Chat",
    class: "hush-chat",
    about: "Some text about Hush Chat",
  },
  {
    title: "Hush Chat",
    class: "hush-chat",
    about: "Some text about Hush Chat",
  },
  {
    title: "Hush Chat",
    class: "hush-chat",
    about: "Some text about Hush Chat",
  },
  {
    title: "Hush Chat",
    class: "hush-chat",
    about: "Some text about Hush Chat",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio">
      <p className="title">Featured Works</p>
      <div className="featured-works">
        {FEATURED.map((item) => {
          return (
            <div className="featured-work">
              <img src={"https://picsum.photos/600/300"} />
              <div className="text-content">
                <p className='title'>{item.title}</p>
                <p className='about'>{item.about}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
