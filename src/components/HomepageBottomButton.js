import React from "react";

const HomepageBottomButton = (props) => {
  const buttonText = {
    explore: "Explore More",
    conatct: "Contact Me",
  };
  return (
    <div
      className="d-flex align-items-center justify-content-center homepage-bottom-buttons"
      style={{
        minHeight: "26vh",
        minWidth: "35vw",
      }}
    >
      <button
        type="button"
        className="btn btn-lg contact-me-btn"
        onClick={() => {
          props.scrollTo(props.contactRef);
        }}
      >
        <div className="d-flex align-items-center justify-content-around inner-contact-me-btn">
          {buttonText.conatct}
          <span>
            <i className="fa-solid fa-message fa-shake"></i>
          </span>
        </div>
      </button>
      <button
        type="button"
        className="btn btn-lg explore-more-btn"
        onClick={() => {
          props.scrollTo(props.experienceRef);
        }}
      >
        <div className="d-flex align-items-center justify-content-around inner-explore-more-btn">
          {buttonText.explore}
          <span>
            <i className="fa-solid fa-angles-down fa-bounce"></i>
          </span>
        </div>
      </button>
    </div>
  );
};

export default HomepageBottomButton;
