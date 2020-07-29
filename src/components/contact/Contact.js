import React from "react";
import "./contact.styles.scss";

function Contact() {
  document.title = "Contact";
  return (
    <div className="contact-wrapper-div">
      <h2>
        <a
          style={{ textDecoration: "none", color: "blue", marginLeft: "2rem" }}
          href="mailto:turkaytunc00@gmail.com"
        >
          turkaytunc00@gmail.com
        </a>
      </h2>
      <h2>
        <a
          style={{ textDecoration: "none", color: "blue", marginLeft: "2rem" }}
          href="https://www.linkedin.com/in/turkaytunc/"
          target="_blank"
        >
          LinkedIn
        </a>
      </h2>
    </div>
  );
}

export default Contact;
