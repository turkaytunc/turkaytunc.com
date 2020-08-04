import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="navbar-div">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <Link className="navbar-a" to="/">
              Home
            </Link>
          </li>
          <li className="navbar-li">
            <Link className="navbar-a" to="/projects">
              Projects
            </Link>
          </li>
          <li className="navbar-li">
            <Link className="navbar-a" to="/articles">
              Articles
            </Link>
          </li>
          <li className="navbar-li">
            <Link className="navbar-a" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`nav-hamburger ${isMenuOpen ? `change` : null}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="hamburger-bar1"></div>
        <div className="hamburger-bar2"></div>
        <div className="hamburger-bar3"></div>
      </div>
    </div>
  );
}

export default Navbar;
