import React from "react";
import HomepageTopAbout from "./HomepageTopAbout";
import HomepageTopIllustration from "./HomepageTopIllustration";

const HomepageTop = () => {
  return (
    <div
      className=" min-vw-100 d-flex ms-auto align-items-center justify-content-around main-homepage-top"
      style={{ minHeight: "62vh" }}
    >
      <HomepageTopAbout />
      <HomepageTopIllustration />
    </div>
  );
};

export default HomepageTop;
