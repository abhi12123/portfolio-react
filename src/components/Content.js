import React, { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Landing from "./Landing";
import Portfolio from "./Portfolio";

export default function Content() {
  const [boundingClient, setBoundingClient] = useState(undefined);

  window.onscroll = () => {
    setBoundingClient(document.querySelector(".portfolio").getBoundingClientRect());
  };
  return (
    <div>
      <Landing boundingClient={boundingClient} />
      {/* <AboutMe/> */}
      <Portfolio />
      <Contact boundingClient={boundingClient} />
    </div>
  );
}
