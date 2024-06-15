import React from "react";
import SkillsAndTechnologies from "./SkillsAndTechnologies";

const Skills = () => {
  const heading = "SKILLS";
  return (
    <div className="d-flex ms-auto align-items-top justify-content-around min-vw-100 main-contact">
      <div className="container mx-4 my-4" style={{ maxWidth: "100vw" }}>
        <div className="col">
          <div className="d-flex align-items-center justify-content-center">
            <h1 className="welcome-text">{heading}</h1>
          </div>
        </div>
        <div className="col">
          <div className="mainContactMeForm">
            <SkillsAndTechnologies />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
