import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-main-wrap">
      <div className="footer-div-1">
        <ul>
          <li>
            <a
              className="footer-div-1-a"
              href="https://github.com/turkaytunc"
              target="_blank"
            >
              <img
                src={`${process.env.PUBLIC_URL}/footer/github-icon.png`}
                height="20px"
              />
              <p>GitHub</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-div-2">div2</div>
      <div className="footer-div-3">
        <p className="footer-div-3-p">Türkay Tunc &copy;2020</p>
      </div>
    </div>
  );
}

export default Footer;
