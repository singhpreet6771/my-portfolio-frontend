import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as SchoolIcon } from "../assets/experience.svg";

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
    axios({
      url: `${process.env.REACT_APP_DOWNLINE_URL}${process.env.REACT_APP_GET_EXPERIENCE}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setExperienceList(parseExperiences(res.data.experiences));
      })
      .catch((err) => {
        console.log("Got Error from Fetch Experience API: ", err);
      });
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
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.companyName}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default CompanyList;
