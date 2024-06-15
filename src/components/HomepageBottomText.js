import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HomepageBottomText = () => {
  const typewriterWords = [
    "A Creative Developer",
    "A Tech Enthusiast",
    "A Problem Solver",
    "An Infinite Learner",
  ];
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minWidth: "65vw",
      }}
    >
      <h1>
        <span className="gradient-text">
          <Typewriter
            words={typewriterWords}
            loop={500}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default HomepageBottomText;
