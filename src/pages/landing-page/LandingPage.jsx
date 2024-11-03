import React from "react";
import TopNav from "../../components/top-nav/TopNav";
import LeftNav from "../../components/left-nav/LeftNav";
import NextPrev from "../../components/next-prev/NextPrev";
import BasicDetails from "../basic-details/BasicDetails";
import "./LandingPage.css";
import { useLocation } from "react-router-dom";
import EducationDetails from "../educational-details/EducationDetails";
import ExperienceDetails from "../experience-details/ExperienceDetails"
const LandingPage = () => {
  const currentTab = useLocation();
  const submit = () => {
    console.log("Submited");
  };
  return (
    <div className="main">
      {/* <div className="top-nav">
        <TopNav></TopNav>
      </div> */}
      <div className="container">
        {/* <div className="left-nav">
          <LeftNav></LeftNav>
        </div> */}

        <div className="content">
          <div>
            <div>
              {currentTab.pathname === "/basic-details" && <BasicDetails />}
            </div>
            <div>
              {currentTab.pathname=== '/education-details' && <EducationDetails/>}
            </div>
            <div>
                {currentTab.pathname=== '/experience-details' && <ExperienceDetails/>}
              
            </div>
            <div>
              {}
            </div>
          </div>
          <div>
            <NextPrev submitForm={submit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
