import React from "react";
import HomepageBottomText from "./HomepageBottomText";

const HomepageTopAbout = () => {
  const welcomeWords = {
    greeting: "Hi THERE,",
    name: "I'M GURPREET SINGH",
  };
  const aboutMe = `I am a forward-thinking SDE I driven by innovation and a
  relentless desire to master the art of software development. I'm
  on a mission to set new standards of excellence in everything I
  do. My core values – integrity, courage, and responsibility –
  underpin my work ethic, shaping my path toward achieving
  greatness. I believe in taking ownership of projects and seeing
  them through with unwavering dedication.`;
  return (
    <div
      className="d-flex align-items-center justify-content-center homepage-top-about-main"
      style={{
        minHeight: "50vh",
        minWidth: "65vw",
      }}
    >
      <div
        className="container mx-4 my-4 homepage-heading"
        style={{ maxWidth: "65vw" }}
      >
        <div className="col">
          <div className="d-flex align-items-center justify-content-center">
            <h1 className="welcome-text">{welcomeWords.greeting}</h1>
          </div>
        </div>
        <div className="col mb-3">
          <div className="d-flex align-items-center justify-content-center">
            <h1 className="welcome-text">{welcomeWords.name}</h1>
          </div>
        </div>
        <div className="col my-3 mt-4 mx-3">
          <div className="d-flex align-items-center justify-content-center">
            <p className="aboutText">{aboutMe}</p>
          </div>
        </div>
        <HomepageBottomText />
      </div>
    </div>
  );
};

export default HomepageTopAbout;
