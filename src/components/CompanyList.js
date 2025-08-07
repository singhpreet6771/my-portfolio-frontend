import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as SchoolIcon } from "../assets/experience.svg";

const experienceListLocal = [
  {
    companyName: "SkyLine Meridian",
    title: "Flutter App Developer Intern",
    from: "Jun 2021",
    to: "Jul 2021",
    technologies: ["Flutter", "Android Studio", "Git"],
    icon: "work",
    location: "Remote",
    description:
      "Led the development of a live quiz application from scratch, managing both frontend and backend tasks.",
    date: Date.now(),
  },
  {
    companyName: "Sabre India",
    title: "Associate Intern",
    from: "Jan 2023",
    to: "Jul 2023",
    technologies: ["NodeJS", "Typescript", "ExpressJS"],
    icon: "work",
    location: "Bengaluru, Karnataka, India",
    description:
      "Redesigned and implemented a new Node.js backend for an existing frontend, replacing the legacy .NET backend.",
    date: Date.now(),
  },
  {
    companyName: "Sabre India",
    title: "SDE I",
    from: "Jul 2023",
    to: "Jun 2025",
    technologies: ["ReactJS", "KnockoutJS", "NodeJS", "Graphql", "Javascript"],
    icon: "work",
    location: "Bengaluru, Karnataka, India",
    description:
      "Actively developing software with a variety of JavaScript frameworks, balancing legacy Knockout.js with cutting-edge Node.js, React, and Express.js technologies.",
    date: Date.now(),
  },
  {
    companyName: "Sabre India",
    title: "SDE III",
    from: "Jul 2025",
    to: "Present",
    technologies: ["ReactJS", "KnockoutJS", "NodeJS", "Graphql", "Javascript"],
    icon: "work",
    location: "Remote",
    description:
      "Leading full-stack development, architecture, and code quality initiatives while mentoring engineers and driving cross-team collaboration for scalable, high-impact product features.",
    date: Date.now(),
  },
];

const CompanyList = () => {
  const parseExperiences = (experiences) => {
    return experiences.map((exp) => {
      const timeline = exp.from + " - " + exp.to;
      return {
        ...exp,
        timeline,
      };
    });
  };

  const [experienceList, setExperienceList] = useState([]);

  useEffect(() => {
    // axios({
    //   url: `${process.env.REACT_APP_DOWNLINE_URL}${process.env.REACT_APP_GET_EXPERIENCE}`,
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     //TODO: HardCode here.
    //     setExperienceList(parseExperiences(res.data.experiences));
    //   })
    //   .catch((err) => {
    //     console.log("Got Error from Fetch Experience API: ", err);
    //   });
    setExperienceList(parseExperiences(experienceListLocal));
  }, []);

  let workIconStyles = { background: "#f5e3a0" };
  let schoolIconStyles = { background: "#f5e3a0" };
  return (
    <div className="main-vertical-timeline">
      <VerticalTimeline lineColor="black">
        {experienceList.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.companyName !== undefined &&
            element.companyName !== null &&
            element.companyName !== "";

          return (
            <VerticalTimelineElement
              contentStyle={{
                background:
                  "linear-gradient(45deg, #f2f2f2, rgb(245, 227, 160))",
                color: "#000",
              }}
              contentArrowStyle={{
                borderRight: "12px solid  rgb(245, 227, 160)",
              }}
              key={element._id}
              date={element.timeline}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <SchoolIcon /> : <SchoolIcon />}
            >
              <h3
                className="vertical-timeline-element-title experience-title"
                style={{ fontWeight: "bold" }}
              >
                {element.title}
              </h3>
              <div className="experience-location-icon">
                <i className="fa-solid fa-location-dot"></i>
                <h6 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h6>
              </div>
              <p id="description">{element.description}</p>
              {showButton && (
                <div
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.companyName}
                </div>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default CompanyList;
