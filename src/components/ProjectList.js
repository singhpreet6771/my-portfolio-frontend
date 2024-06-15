import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const ProjectList = () => {
  const parseProjects = (projects) => {
    return projects.map((prj) => {
      const technologies = prj.technologies.join(", ");
      return {
        ...prj,
        technologies: technologies,
      };
    });
  };

  const [projectLists, setProjectLists] = useState([]);

  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_DOWNLINE_URL}${process.env.REACT_APP_GET_PROJECT}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setProjectLists(parseProjects(res.data.projects));
      })
      .catch((err) => {
        console.log("Got Error from Fetch Projects API: ", err);
      });
  }, []);

  return (
    <>
      {projectLists.map((element) => {
        return (
          <div className="project-card" key={element._id}>
            <div className="project-card-heading">{element.heading}</div>
            <div className="project-card-body">
              <div className="description">{element.description}</div>
              <div className="technologies-used">
                <div>Technologies:</div>
                <span>{element.technologies}</span>
              </div>
            </div>
            <div className="project-card-footer">
              <div className="learn-more-btn">learn more</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectList;
