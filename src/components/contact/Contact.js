import React from "react";
import "./contact.styles.scss";

function Contact() {
  document.title = "Contact";
  return (
    <div className="contact-wrapper-div">
      <h2>
        <a
          style={{
            textDecoration: "none",
            color: "#1840c4",
            marginLeft: "2rem",
            marginTop: "0",
          }}
          href="mailto:turkaytunc00@gmail.com"
        >
          turkaytunc00@gmail.com
        </a>
      </h2>
      <h2>
        <a
          style={{
            textDecoration: "none",
            color: "#1840c4",
            marginLeft: "2rem",
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
