import React, { useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(undefined);
  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className='text-medium'>
      <i
        class={!showNavbar ? "fa-solid fa-bars" : "fa-solid fa-xmark"}
        id="bars-btn"
        onClick={handleNavbar}
      ></i>
      <div className={`navbar ${showNavbar && "show-navbar"}`}>
        <a>HOME</a>
        <a>PORTFOLIO</a>
        <a>CONTACT</a>
      </div>
    </div>
  );
}
