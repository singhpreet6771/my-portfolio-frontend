import React from "react";

const HomepageBottomConnectIcons = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-around homepage-bottom-icons"
      style={{
        minHeight: "26vh",
        minWidth: "65vw",
      }}
    >
      <div className="social-links">
        <a
          className="link"
          href={process.env.REACT_APP_LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          className="link"
          href={process.env.REACT_APP_GITHUB_URL}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          className="link"
          href={process.env.REACT_APP_TWITTER_URL}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a
          className="link"
          href={process.env.REACT_APP_WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a
          className="link"
          href={process.env.REACT_APP_INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default HomepageBottomConnectIcons;
