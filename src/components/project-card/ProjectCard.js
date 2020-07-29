import React from "react";
import "./project-card.styles.scss";

export const ProjectCard = (props) => {
  return (
    <div className="project-card-wrapper">
      <a
        style={{ textDecoration: "none", display: "flex" }}
        href={`${props.projectUrl}`}
        target="_blank"
      >
        <div className="project-card-wrapper-div">
          <div className="project-card-h-wrapper">
            <h3 className="project-card-h">{`${props.projectName}`}</h3>
          </div>
          <img className="project-card-image" src={`${props.imageUrl}`}></img>
          <div className="project-card-p-wrapper">
            <p className="project-card-p">{`${props.projectDescription}`}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
