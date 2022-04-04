import React, { useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(undefined);
  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleScroll = (type) => {
    if (type == "home") {
      window.scroll(0, 0);
      return;
    }
    if (type == "portfolio") {
      window.scroll(0, window.innerHeight);
      return;
    }
    window.scroll(0, window.innerHeight*6);
  };
  return (
    <div className="text-medium">
      <i
        class={!showNavbar ? "fa-solid fa-bars" : "fa-solid fa-xmark"}
        id="bars-btn"
        onClick={handleNavbar}
      ></i>
      <div className={`navbar ${showNavbar && "show-navbar"}`}>
        <a onClick={() => handleScroll("home")}>HOME</a>
        <a onClick={() => handleScroll("portfolio")}>PORTFOLIO</a>
        <a onClick={() => handleScroll("contact")}>CONTACT</a>
      </div>
    </div>
  );
}
