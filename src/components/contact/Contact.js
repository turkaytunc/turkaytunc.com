import React from "react";
import "./contact.styles.scss";

function Contact() {
  document.title = "Contact";
  return (
    <div className="contact-wrapper-div">
      <h2
        className="contact-h2"
        style={{ display: `flex`, alignItems: `center`, marginLeft: `2rem` }}
      >
        <img src={`${process.env.PUBLIC_URL}/mail.png`}></img>
        <a
          style={{
            textDecoration: "none",
            color: "#1840c4",
            marginTop: "0",
          }}
          href="mailto:turkaytunc00@gmail.com"
        >
          turkaytunc00@gmail.com
        </a>
      </h2>
      <h2
        className="contact-h2"
        style={{ display: `flex`, alignItems: `center`, marginLeft: `2rem` }}
      >
        <img src={`${process.env.PUBLIC_URL}/footer/linkedin.png`}></img>
        <a
          style={{
            textDecoration: "none",
            color: "#1840c4",
            marginTop: "0",
          }}
          href="https://www.linkedin.com/in/turkaytunc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </h2>
    </div>
  );
}

export default Contact;
