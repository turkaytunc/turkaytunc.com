import React from "react";
import "./homepage.styles.scss";

function HomePage() {
  const randColor = `rgb(
    ${~~(Math.random() * 255)},
    ${~~(Math.random() * 255)},
    ${~~(Math.random() * 255)}
  )`;

  console.log(randColor);
  return (
    <div className="homepage-wrapper">
      <p className="intro" style={{ color: `${randColor}` }}>
        Hi, I'm Türkay TUNÇ.
      </p>
      <p className="intro" style={{ color: `${randColor}` }}>
        I'm a front-end web developer. <br />
        Doing front-end design with React and Sass.
      </p>
      <p className="intro" style={{ color: `${randColor}` }}>
        As a hobby making games and tools with Unity and C#.
      </p>
    </div>
  );
}

export default HomePage;
