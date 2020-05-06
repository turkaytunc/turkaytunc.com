import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-div">
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
    </div>
  );
}

export default Navbar;
