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
              href="https://www.youtube.com/channel/UChkxm4Q14X0NdGFvZOm1hMQ"
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
      <div className="footer-div-2">
        <ul>
          <li>
            <a
              className="footer-div-2-a"
              href="https://www.instagram.com/filthycoder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}/footer/instagramlogo.png`}
                  height="16px"
                  alt="instagram-img"
                />
                Instagram
              </p>
            </a>
          </li>
          <li>
            <a
              className="footer-div-2-a"
              href="https://twitter.com/filthycoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}/footer/twitterlogo.jpg`}
                  height="16px"
                  alt="twitter-img"
                />
                Twitter
              </p>
            </a>
          </li>
          <li>
            <a
              className="footer-div-2-a"
              href="https://turkaytunc.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}/footer/itchiologo.png`}
                  height="16px"
                  alt="itchio-img"
                />
                Itch.io
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-div-3">
        <p className="footer-div-3-p">&copy;2020 Türkay Tunç</p>
      </div>
    </div>
  );
}

export default Footer;
