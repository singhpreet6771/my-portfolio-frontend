import React from "react";
import HomepageBottomButton from "./HomepageBottomButton";
import HomepageBottomConnectIcons from "./HomepageBottomConnectIcons";

const HomepageBottom = (props) => {
  return (
    <div
      className="d-flex align-items-center justify-content-around mx-7 main-homepage-bottom"
      style={{
        minHeight: "30vh",
        minWidth: "100vw",
      }}
    >
      <HomepageBottomConnectIcons />
      <HomepageBottomButton
        scrollTo={props.scrollTo}
        experienceRef={props.experienceRef}
        contactRef={props.contactRef}
      />
    </div>
  );
};

export default HomepageBottom;
