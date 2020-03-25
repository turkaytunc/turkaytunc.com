import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar--div">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Articles">Articles</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
