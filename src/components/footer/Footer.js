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
              rel="noopener noreferrer"
            >
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}/footer/github-icon.png`}
                  height="16px"
                  alt="github-img"
                />
                GitHub
              </p>
            </a>
          </li>
          <li>
            <a
              className="footer-div-1-a"
              href="https://www.linkedin.com/in/t%C3%BCrkay-tun%C3%A7-674353177/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}/footer/linkedin.png`}
                  height="16px"
                  alt="linkedin-img"
                />
                LinkedIn
              </p>
            </a>
          </li>
          <li>
            <a
              className="footer-div-1-a"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}/footer/youtube.png`}
                  height="16px"
                  alt="youtube-img"
                />
                YouTube
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-div-2"></div>
      <div className="footer-div-3">
        <p className="footer-div-3-p">&copy;2020 Türkay Tunç</p>
      </div>
    </div>
  );
}

export default Footer;
