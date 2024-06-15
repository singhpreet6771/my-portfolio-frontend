import React from "react";
import illustrationImage from "../assets/portfolio-main-illustration.jpg";

const HomepageTopIllustration = () => {
  return (
    <div
      className="homepage-illustration-main"
      style={{
        minHeight: "50vh",
        minWidth: "35vw",
      }}
    >
      <img className="picture" src={illustrationImage} alt="" />
    </div>
  );
};

export default HomepageTopIllustration;
