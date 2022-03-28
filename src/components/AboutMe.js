import React from "react";

export default function AboutMe() {
  console.log(window.location.href);
  return (
    <div className="about-me">
      <p>About Me</p>
      <div>
        <div className="profile-pic">
          <p>
            Hello! My name is Abhinav and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS! My main focus these days is building accessible, inclusive
            products and digital experiences at Upstatement for a variety of
            clients. Here are a few technologies I’ve been working with
            recently:
          </p>
        </div>
        
      </div>
    </div>
  );
}
