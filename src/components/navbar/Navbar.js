import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar-div">
      <ul className="navbar-ul">
        <li className="navbar-li">
          <a className="navbar-a" href="#">
            Home
          </a>
        </li>
        <li className="navbar-li">
          <a className="navbar-a" href="#Projects">
            Projects
          </a>
        </li>
        <li className="navbar-li">
          <a className="navbar-a" href="#Articles">
            Articles
          </a>
        </li>
        <li className="navbar-li">
          <a className="navbar-a" href="#Contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
