import React, { useState } from "react";

export default function Contact({ boundingClient }) {
  let opacity =
    (boundingClient?.height + boundingClient?.top - window.innerHeight) /
    window.innerHeight;
  if (1 - opacity < 0) {
    opacity = 0;
  } else {
    opacity = (1 - opacity) ** 3;
  }

  if (boundingClient == undefined) {
    opacity = 0;
  }
  return (
    <div
      className="contact content"
      style={{ opacity, display: opacity <= 0 && "none" }}
    >
      <p className="text-large">Get in Touch</p>
      <p className="text-small container">
        My inbox is always open. Whether you have a question or just want to say
        hi, I’ll try my best to get back to you!
      </p>
      <a className="primary-btn text-small font-primary">Say Hello</a>

      <p className="text-medium icons container">
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-solid fa-at"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-dev"></i>
      </p>
    </div>
  );
}
