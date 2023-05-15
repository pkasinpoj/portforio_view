import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import "./Resume.css";
import {
  faUserGraduate as fasUserGraduate,
  faHistory as fasHistory,
  faChartBar as fasChartBar,
  faLaptopCode as fasLaptopCode,
  faProjectDiagram as fasProjectDiagram,
  faCertificate as fasCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: fasUserGraduate },
    { label: "Work History Part 1", logoSrc: fasHistory },
    { label: "Work History Part 2", logoSrc: fasHistory },
    { label: "Projects Part 1", logoSrc: fasChartBar },
    { label: "Projects Part 2", logoSrc: fasChartBar },
    {
      label: "Soft Projects",
      logoSrc: fasProjectDiagram,
    },
    { label: "Programming Skills", logoSrc: fasLaptopCode },
    { label: "Certificate/Activity", logoSrc: fasCertificate },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML & CSS", ratingPercentage: 85 },
    { skill: "Javascript", ratingPercentage: 85 },
    { skill: "Typescript", ratingPercentage: 85 },
    { skill: "Google App Script", ratingPercentage: 89 },
    { skill: "Flutter", ratingPercentage: 89 },
    { skill: "Java", ratingPercentage: 70 },
    { skill: "Power Query M", ratingPercentage: 80 },
    { skill: "Dax", ratingPercentage: 80 },
    { skill: "Node.js", ratingPercentage: 80 },
    { skill: "React", ratingPercentage: 80 },
    { skill: "JDBC", ratingPercentage: 80 },
    { skill: "TypeORM", ratingPercentage: 80 },
    { skill: "Sequelize", ratingPercentage: 80 },
    { skill: "MySQL", ratingPercentage: 80 },
    { skill: "SQL Server", ratingPercentage: 80 },
    { skill: "MongoDB", ratingPercentage: 80 },
    { skill: "Git", ratingPercentage: 80 },
    { skill: "Microsoft Power BI", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    [
      {
        title: "English Learning Websites",
        duration: { fromDate: "06/2018", toDate: "01/2019" },
        description:
          "I designed and developed an English language teaching website with a membership system, video-based learning, level-up exams, and gamified questionnaires. The membership system allows users to create accounts and track their progress. The video lessons can be accessed at any time. Level-up exams enable users to progress to the next course. The gamified questionnaires provide interactive practice for speaking, writing, and grammar skills",
        subHeading:
          "Technologies Used: Node JS,Javascript,Typescript,Typeorm,React,Mysql",
      },
      {
        title: "SmartFarm Website for IoT devics in Koi fish farming",
        duration: { fromDate: "05/2019", toDate: "06/2020" },
        description:
          "created web services a smart farm concept for koifish using IoT devices in each carp pond. The system links to customer accounts to measure factors affecting fish growth, with data stored in MongoDB. A cron job analyzes the data and imports it into MySQL for easy website dashboard access. The dashboard displays data over different time periods and features a membership system for customers",
        subHeading:
          "Technologies Used:  Node JS,Javascript,Typescript,Typeorm,React,Mongo db , Mysql",
      },
    ],
    [
      {
        title: "Car Auctions Website",
        duration: { fromDate: "10/2020", toDate: "12/2020" },
        description:
          "created  web services for car auctions and second-hand car trading with user registration and login. The website will include a search system for car criteria, a car reservation system, and a real-time auction system requiring a deposit for participation",
        subHeading:
          "Technologies Used: Node JS,Javascript,Sequelize,React,Postgresql",
      },
      {
        title: "Job Tracking Website",
        duration: { fromDate: "06/2022", toDate: "08/2022" },
        description:
          "created web application that allows users to monitor the progress of different tasks at each stage. And have feature a dashboard for visualizing task data and a membership system that enables users to record their work progress for each process.",
        subHeading:
          "Technologies Used: HTML, JavaScript, CSS, .NET, and SQL Server",
      },
      {
        title: "Hotel Booking Application",
        duration: { fromDate: "10/2022", toDate: "01/2023" },
        description:
          "created application for hotel booking, with a membership system, search function for accommodations, and a booking system that guides users through the process until the reservation is completed and confirmed with the hotel.",
        subHeading: "Technologies Used: Flutter,graphql",
      },
    ],
  ];

  const softProjectsDetails = [
    {
      title: "IOT Line Chatbot ( C++ )",
      description:
        "The project involves programming Arduino to measure water temperature. When the sensor detects a temperature exceeding the predefined threshold, the system will send a notification to Line messaging platform for alerting",
      // subHeading: "Technologies Used: Flutter,graphql",
    },
    {
      title: "Reminder Chatbot ( Java + JDBC  )",
      description:
        "The project involves creating a Line chatbot that allows users to record their tasks or personal scores for later retrieval. The chatbot will have a membership system for user authentication. Users can input and store their task information or scores, which can be accessed and viewed later",
      // subHeading: "Technologies Used: Flutter,graphql",
    },
    {
      title: "Risk Management Dashboard ( Power Query M , Sql Server )",
      description:
        "Create a web dashboard using SQL Server data analysis to present risk information for prevention guidance to stakeholders",
      // subHeading: "Technologies Used: Flutter,graphql",
    },
    {
      title: "Chart-3k-project ( React , Typescript )",
      description:
        'Create a website with a dashboard to verify student data in the "3 Phra Jom" consortium. It allows users to view attendance rates, post-graduation numbers, personnel statistics, and interests in further education across different faculties at the university level',
      // subHeading: "Technologies Used: Flutter,graphql",
    },
  ];

  const certificateOrActivity = [
    {
      title: "TBWG Blockchain Hackathon",
      description:
        "Participate in a competition to present a concept for utilizing blockchain technology and receive training in the Solidity programming language during the event in 2020",
      // subHeading: "Technologies Used: Flutter,graphql",
    },
    {
      title: "The Ultimate React Js Responsive Portfolio Website",
      description:
        "https://www.udemy.com/certificate/UC-d7656fa7-7869-45cc-8db5-25fbc77cd8f3/",
      // subHeading: "Technologies Used: Flutter,graphql",
    },
    {
      title: "Delving into TypeScript from the beginning until practical usage",
      description:
        "https://www.udemy.com/certificate/UC-9141c259-22e7-4564-ad16-33afb27512ba/",
      // subHeading: "Technologies Used: Flutter,graphql",
    },
    {
      title: "Toeic Test in 2021",
      description: "My Score : Listening 345 Reading 205",
      // subHeading: "Technologies Used: Flutter,graphql",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"High School "}
        subHeading={"Triamudomsuksa Pattanakarn Ratchada School"}
        fromDate={"2013"}
        toDate={"2016"}
      />
      <ResumeHeading
        heading={"Computer Science Bachelor's degree"}
        subHeading={"king mongkut s university of technology latkrabang"}
        fromDate={"2016"}
        toDate={"2020"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience1">
      <div className="experience-container">
        <ResumeHeading
          heading={"LATTESOFT CORPORATION COMPANY LIMITED"}
          subHeading={"Backend Developer ( Freelance )"}
          fromDate={"06/2018"}
          toDate={"01/2019"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            I designed the database system and developed the back-end to support
            the implementation of services in the form of RESTful APIs for an
            English language teaching website.
          </span>
        </div>

        <ResumeHeading
          heading={"Graduation Project"}
          subHeading={"Backend Developer"}
          fromDate={"05/2019"}
          toDate={"06/2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            I developed a website system to support data collection from IoT
            devices installed in Koi fish ponds. The system includes a back-end
            that utilizes MongoDB to store data and setup cron job for import
            data into MySQL for easy access. The system also includes RESTful
            APIs to connect with the front-end and provide various services
          </span>
        </div>
      </div>
    </div>,

    <div className="resume-screen-container" key="work-experience2">
      <div className="experience-container">
        <ResumeHeading
          heading={"Riverpark Consultant Company Limited"}
          subHeading={"Backend Developer"}
          fromDate={"10/2020"}
          toDate={"12/2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            I developed a backend system to support a car auction website using
            RESTful APIs to connect to the frontend
          </span>
        </div>
        <ResumeHeading
          heading={"Government Housing Bank"}
          subHeading={"IT Risk Management"}
          fromDate={"12/2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            I oversee multiple systems as a system administrator and develop
            various systems, such as a chatbot and a membership system. I create
            a website to monitor task progress using HTML, JavaScript, CSS,
            .NET, and SQL Server. I also develop a dashboard with analytical
            data from SQL Server, utilizing Power BI with Power M Query, DAX,
            and SQL Server
          </span>
        </div>
        <ResumeHeading
          heading={"LITTLE BEAN SOFT COMPANY LIMITED"}
          subHeading={"Flutter Developer ( Freelance )"}
          fromDate={"10/2022"}
          toDate={"01/2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            I developed mobile application that handles hotel reservations,
          </span>
        </div>
      </div>
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projectspart1">
      {projectsDetails[0].map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="projectspart2">
      {projectsDetails[1].map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="softprojects">
      {softProjectsDetails.map((softProjectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={softProjectsDetails.title}
          subHeading={softProjectsDetails.subHeading}
          description={softProjectsDetails.description}
        />
      ))}
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          {/* <div className="skill-percentage">
           <div
             style={{ width: skill.ratingPercentage + "%" }}
             className="active-percentage-bar"
           ></div>
         </div> */}
        </div>
      ))}
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="certificate-activitys"
    >
      {certificateOrActivity.map((certificateDetail, index) => (
        <ResumeHeading
          key={index}
          heading={certificateDetail.title}
          subHeading={certificateDetail.subHeading}
          description={certificateDetail.description}
        />
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 425;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <FontAwesomeIcon icon={bullet.logoSrc} style={{ color: "#ffffff" }} />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail, index) => ResumeDetail)}
      </div>
    );
  };

  // useEffect(() => {
  //   return () => {
  //     /* UNSUBSCRIBE THE SUBSCRIPTIONS */
  //     fadeInSubscription.unsubscribe();
  //   };
  // }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
