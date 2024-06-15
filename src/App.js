import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { useRef, useEffect } from "react";
import Skills from "./components/Skills";

function App() {
  const home = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);
  const project = useRef(null);
  const skills = useRef(null);

  const vhTOpx = (value) => {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      y = w.innerHeight || e.clientHeight || g.clientHeight;

    var result = (y * value) / 100;
    return result;
  };
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - vhTOpx(8),
      behavior: "smooth",
    });
  };
  const handleScroll = () => {
    const cardElements = document.querySelectorAll(".project-card");
    cardElements.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (cardPosition < screenPosition) {
        card.style.transitionDelay = `${index * 0.4}s`;
        card.classList.add("animate");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Adding and removing scroll event listener

  return (
    <>
      <Navbar
        scrollTo={scrollToSection}
        homeRef={home}
        experienceRef={experience}
        contactRef={contact}
        projectRef={project}
        skillsRef={skills}
      />
      <div ref={home}>
        <Home
          scrollTo={scrollToSection}
          experienceRef={experience}
          contactRef={contact}
        />
      </div>
      <div ref={experience}>
        <Experience />
      </div>
      <div ref={project}>
        <Projects />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
    </>
  );
}

export default App;
