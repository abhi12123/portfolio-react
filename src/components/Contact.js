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
      // style={{ opacity, display: opacity <= 0 && "none" }}
      id='contact'
    >
      <p className="text-large">Get in Touch</p>
      <p className="text-small container">
        My inbox is always open. Whether you have a question or just want to say
        hi, I’ll try my best to get back to you!
      </p>
      <a className="primary-btn text-small font-primary" href="mailto:vp.abhinav@outlook.com">Say Hello</a>

      <p className="text-medium icons container">
          <a target='_blank' href='https://github.com/abhi12123'><i class="fa-brands fa-github"></i></a>
          <a target='_blank' href='https://www.linkedin.com/in/abhinavvp/'><i class="fa-brands fa-linkedin-in"></i></a>
          <a target='_blank' href='mailto:vp.abhinav@outlook.com'><i class="fa-solid fa-at"></i></a>
          <a target='_blank' href='https://twitter.com/abhi_vp_'><i class="fa-brands fa-twitter"></i></a>
          <a target='_blank' href='https://medium.com/@abhinav_vp'><i class="fab fa-medium-m"></i></a>
          <a target='_blank' href='https://dev.to/abhi_vp_'><i class="fa-brands fa-dev"></i></a>
      </p>
    </div>
  );
}
