import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const projectListLocal = [
  {
    heading: "Chatting App",
    description:
      "Introducing a user-friendly chatting app for seamless communication. I've created a platform where messaging is effortless—anytime, anywhere. Share multimedia content easily. Stay connected with convenience and flexibility using this innovative application.",
    technologies: ["Flutter", "Firebase", "Dart"],
    url: "https://github.com/singhpreet6771/Chatting-App",
    date: Date.now(),
  },
  {
    heading: "A.I. Personal Voice Assistant",
    description:
      "Enjoy the convenience of a personal home assistant like Amazon Alexa with this app. Seamlessly integrated into daily life, it sends WhatsApp messages with simple voice commands. Say goodbye to typing and get ready to say hello to effortless communication with your virtual assistant.",
    technologies: ["Python"],
    url: "https://github.com/singhpreet6771/Python_AI_project",
    date: Date.now(),
  },
  {
    heading: "Health Companion App",
    description:
      "Meet your personal fitness ally: a health companion app. Seamlessly track daily goals, access custom workouts, and receive personalized diet plans. Experience convenience and support on your journey to optimal health and wellness with this innovative app.",
    technologies: ["Flutter", "Dart", "Firebase"],
    url: "https://github.com/singhpreet6771/Companion-APP",
    date: Date.now(),
  },
];

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
    // axios({
    //   url: `${process.env.REACT_APP_DOWNLINE_URL}${process.env.REACT_APP_GET_PROJECT}`,
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     //TODO: Hard Code here.
    //     setProjectLists(parseProjects(res.data.projects));
    //   })
    //   .catch((err) => {
    //     console.log("Got Error from Fetch Projects API: ", err);
    //   });

      setProjectLists(parseProjects(projectListLocal));
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
                <div>Tech Stack:</div>
                <span>{element.technologies}</span>
              </div>
            </div>
            {/* Hiding Learn More Button untill I collects links for my project github repos */}
            {false && <div className="project-card-footer">
              <div className="learn-more-btn">learn more</div>
            </div>}
          </div>
        );
      })}
    </>
  );
};

export default ProjectList;
