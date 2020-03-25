import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar-div">
      <ul className="navbar-ul">
        <li className="navbar-li">
          <a className="navbar-a" href="/">
            Home
          </a>
        </li>
        <li className="navbar-li">
          <a className="navbar-a" href="/projects">
            Projects
          </a>
        </li>
        <li className="navbar-li">
          <a className="navbar-a" href="/articles">
            Articles
          </a>
        </li>
        <li className="navbar-li">
          <a className="navbar-a" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
