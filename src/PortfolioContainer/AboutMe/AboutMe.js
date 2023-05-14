// import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";

import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "I am someone who can learn a new job quickly and, if I have a good understanding of the work, I can improve and develop the system even better than before. I have good interpersonal skills and can easily get along with people. I have a cheerful personality and I am always ready to learn new things.",
    // highlights: {
    //   bullets: ["dev 1", "dev 2", "dev 3", "dev 4", "dev 5", "dev 6"],
    //   heading: "Here are a Few Highlights",
    // },
  };

  // const renderHighlight = () => {
  //   return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
  //     <div className="highlight" key={i}>
  //       <div className="highlight-blob"></div>
  //       <span>{value}</span>
  //     </div>
  //   ));
  // };

  // let numbers = [1, 4, 9];
  // let roots = numbers.map(function (num) {
  //   return Math.sqrt(num);
  // });
  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            {/* <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div> */}
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </button>
              <a href="resume_gasinpoj_poonsinsiri.pdf" download="profile.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
