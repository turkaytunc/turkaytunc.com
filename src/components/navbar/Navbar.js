import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
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
  );
}

export default Navbar;
