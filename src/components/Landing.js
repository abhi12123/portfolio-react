import React, { useEffect, useRef, useState } from "react";

export default function Landing({ boundingClient }) {
  const opacity = (boundingClient?.y + window.innerHeight) / 977;
  return (
    <div
      className="landing content"
      id='home'
      style={{
        opacity: opacity > 0.8 ? 1 : opacity ** 3,
        display: opacity <= 0 && "none",
      }}
    >
      <p className="text-small">Hello, my name is</p>
      <p className="text-large">Abhinav VP</p>
      <p className="text-medium container">I build things for the web</p>
      <p className="text-small">
        I’m a software engineer specializing in building exceptional digital
        experiences. <br />
        Currently, I’m working at Ceegees Software Solutions.
      </p>
      <a
        className="primary-btn text-small"
        href="https://www.abhinavvp.com"
        target="_blank"
      >
        My Blog
      </a>
      {/* <div className="scroll-direction text-small">
        Scroll down to see some things I've built{" "}
        <i class="fa-solid fa-computer-mouse"></i>
      </div> */}
    </div>
  );
}
