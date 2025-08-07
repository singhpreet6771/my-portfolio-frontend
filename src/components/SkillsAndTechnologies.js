import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const skillsListLocal = [
  {
    name: "NODEJS",
    date: Date.now(),
  },
  {
    name: "MONGODB",
    date: Date.now(),
  },
  {
    name: "GRAPHQL",
    date: Date.now(),
  },
  {
    name: "FLUTTER",
    date: Date.now(),
  },
  {
    name: "EXPRESSJS",
    date: Date.now(),
  },
  {
    name: "KNOCKOUTJS",
    date: Date.now(),
  },
  {
    name: "REACTJS",
    date: Date.now(),
  },
  {
    name: "JAVASCRIPT",
    date: Date.now(),
  },
  {
    name: "TYPESCRIPT",
    date: Date.now(),
  },
  {
    name: "JAVA",
    date: Date.now(),
  },
  {
    name: "PYHTON",
    date: Date.now(),
  },
  {
    name: "C++",
    date: Date.now(),
  },
  {
    name: "DART",
    date: Date.now(),
  },
  {
    name: "HTML",
    date: Date.now(),
  },
  {
    name: "CSS",
    date: Date.now(),
  },
  {
    name: "GITHUB",
    date: Date.now(),
  },
  {
    name: "ESLINT",
    date: Date.now(),
  },
  {
    name: "JEST",
    date: Date.now(),
  },
  {
    name: "SQL",
    date: Date.now(),
  },
  {
    name: "GIT",
    date: Date.now(),
  },
  {
    name: "FIREBASE",
    date: Date.now(),
  },
];

const SkillsAndTechnologies = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // axios({
    //   url: `${process.env.REACT_APP_DOWNLINE_URL}${process.env.REACT_APP_GET_SKILLS}`,
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     //TODO: Hard Code here.
    //     setSkills(res.data.skills);
    //   })
    //   .catch((err) => {
    //     console.log("Got Error from Fetch Skills API: ", err);
    //   });

      setSkills(skillsListLocal);
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
