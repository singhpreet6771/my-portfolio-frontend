import React from "react";
import HomepageTop from "./HomepageTop";
import HomepageBottom from "./HomepageBottom";

const Home = (props) => {
  return (
    <>
      <HomepageTop />
      <HomepageBottom
        scrollTo={props.scrollTo}
        experienceRef={props.experienceRef}
        contactRef={props.contactRef}
      />
    </>
  );
};

export default Home;
