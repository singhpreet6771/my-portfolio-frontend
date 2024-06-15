import React, { useState } from "react";
import logoImage from "../assets/portfolio-logo.png";
const Navbar = (props) => {
  const [optionSelected, setOptionSelected] = useState("/");

  const changeSelection = (option) => {
    setOptionSelected(option);
  };
  const navItemStyle = {
    display: "flex",
    alignItems: "center",
  };
  const navbarSections = {
    about: "About",
    experience: "Experiences",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    resume: "Resume",
  };
  return (
    <div className="min-vw-100 navbar-sticky" style={{ minHeight: "8vh" }}>
      <nav className="navbar navbar-expand-lg bg-body">
        <div className="container-fluid">
          <div className="nav-item">
            <div
              className="navbar-brand"
              onClick={() => {
                changeSelection("/");
                props.scrollTo(props.homeRef);
              }}
            >
              <img className="logo-picture" src={logoImage} alt="" />
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ms-auto custom-navbar-flex" role="search">
              <div className="nav-item" style={navItemStyle}>
                <div
                  className={`nav-link ${
                    optionSelected === "/" ? "nav-item-active" : ""
                  } me-4`}
                  aria-current="page"
                  onClick={() => {
                    changeSelection("/");
                    props.scrollTo(props.homeRef);
                  }}
                >
                  <div className="underline">{navbarSections.about}</div>
                </div>
              </div>
              <div className="nav-item" style={navItemStyle}>
                <div
                  className={`nav-link ${
                    optionSelected === "/experience" ? "nav-item-active" : ""
                  } me-4`}
                  aria-current="page"
                  onClick={() => {
                    changeSelection("/experience");
                    props.scrollTo(props.experienceRef);
                  }}
                >
                  <div className="underline">{navbarSections.experience}</div>
                </div>
              </div>
              <div className="nav-item" style={navItemStyle}>
                <div
                  className={`nav-link ${
                    optionSelected === "/projects" ? "nav-item-active" : ""
                  } me-4`}
                  aria-current="page"
                  onClick={() => {
                    changeSelection("/projects");
                    props.scrollTo(props.projectRef);
                  }}
                >
                  <div className="underline">{navbarSections.projects}</div>
                </div>
              </div>
              <div className="nav-item" style={navItemStyle}>
                <div
                  className={`nav-link ${
                    optionSelected === "/skills" ? "nav-item-active" : ""
                  } me-4`}
                  aria-current="page"
                  onClick={() => {
                    changeSelection("/skills");
                    props.scrollTo(props.skillsRef);
                  }}
                >
                  <div className="underline">{navbarSections.skills}</div>
                </div>
              </div>
              <div className="nav-item" style={navItemStyle}>
                <div
                  className={`nav-link ${
                    optionSelected === "/contact" ? "nav-item-active" : ""
                  } me-4`}
                  aria-current="page"
                  onClick={() => {
                    changeSelection("/contact");
                    props.scrollTo(props.contactRef);
                  }}
                >
                  <div className="underline">{navbarSections.contact}</div>
                </div>
              </div>
              <div className="btn btn-outline-danger">
                <a
                  className="nav-link mx-2 me-2"
                  href={process.env.REACT_APP_RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {navbarSections.resume}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
