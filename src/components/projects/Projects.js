import React from "react";
import { ProjectCard } from "../project-card/ProjectCard";
import "./projects.styles.scss";

function Projects() {
  document.title = "Projects";
  return (
    <div className="projects-outer-wrapper">
      <div className="projects-grid-wrapper">
        <ProjectCard
          projectName={`FController`}
          imageUrl={`https://github.com/turkaytunc/3D-character-controller/raw/master/StaticFiles/thumbnail.png`}
          projectUrl={`https://github.com/turkaytunc/3D-character-controller`}
          projectDescription={`Physics based fps controller for unity.`}
        />
        <ProjectCard
          projectName={`Racon`}
          imageUrl={`https://github.com/turkaytunc/Racon/raw/master/StaticFiles/Racon.png`}
          projectUrl={`https://github.com/turkaytunc/Racon`}
          projectDescription={`2D space-shooter made with unity.`}
        />
        <ProjectCard
          projectName={`RESTful API`}
          imageUrl={`${process.env.PUBLIC_URL}/rest.jpg`}
          projectUrl={`https://github.com/turkaytunc/rest-api-practice`}
          projectDescription={`REST API made with mongoDB and Node.js`}
        />
        <ProjectCard
          projectName={`Chef`}
          imageUrl={`${process.env.PUBLIC_URL}/food.jpg`}
          projectUrl={`https://github.com/turkaytunc/recipe-app`}
          projectDescription={`Food recipe suggestion app made with React, axios and sass.`}
        />
      </div>
    </div>
  );
}

export default Projects;
