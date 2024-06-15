import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const SkillsAndTechnologies = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_DOWNLINE_URL}${process.env.REACT_APP_GET_SKILLS}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setSkills(res.data.skills);
      })
      .catch((err) => {
        console.log("Got Error from Fetch Skills API: ", err);
      });
  }, []);

  return (
    <div className="main_skills_and_tech">
      {skills &&
        skills.map((skill) => {
          return (
            <div key={skill._id} className="skills_tab">
              <span className="skill_text" style={{ color: "#f5e3a4" }}>
                {skill.name}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default SkillsAndTechnologies;
