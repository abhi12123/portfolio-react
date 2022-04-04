import React from "react";

export default function AboutMe() {
  return (
    <div className="about-me">
      <p className='text-large'>About Me</p>
      <div>
        <div className="profile-pic">
          <p className='text-small'>
            Hello there! <br />
            I'm Abhinav and I enjoy creating things that live on the internet.
            <br />
            Here are a few technologies I’ve been working with recently:
            <ul>
              <li><i class="fa-solid fa-angle-right"></i>JavaScript (ES6+)</li>
              <li><i class="fa-solid fa-angle-right"></i>React</li>
              <li><i class="fa-solid fa-angle-right"></i>NestJs</li>
            </ul>
          </p>
        </div>
        <p className="description text-small">
          Hello there! <br />
          I'm Abhinav and I enjoy creating things that live on the internet.
          <br />
          Here are a few technologies I’ve been working with recently:
            <ul>
              <li><i class="fa-solid fa-angle-right"></i>JavaScript (ES6+)</li>
              <li><i class="fa-solid fa-angle-right"></i>React</li>
              <li><i class="fa-solid fa-angle-right"></i>NestJs</li>
            </ul>
        </p>
      </div>
    </div>
  );
}
