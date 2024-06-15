import React from "react";
import ProjectList from "./ProjectList";

const Projects = () => {
  const heading = "PROJECTS";
  return (
    <div className="d-flex ms-auto align-items-top justify-content-around min-vw-100">
      <div className="container mx-4 my-4" style={{ maxWidth: "100vw" }}>
        <div className="col">
          <div className="d-flex align-items-center justify-content-center">
            <h1 className="welcome-text">{heading}</h1>
          </div>
        </div>
        <div className="col">
          <div className="mainProjectList">
            <ProjectList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
