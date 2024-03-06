import React, { useState, useEffect } from "react";
import "./Counts.css";

function Counts() {
  const [trainersCount, setTrainersCount] = useState(1);
  const [membersCount, setMembersCount] = useState(1);
  const [lbsLostCount, setLbsLostCount] = useState(1);
  const [fitnessProgramsCount, setFitnessProgramsCount] = useState(1);
  const [isInView, setIsInView] = useState(false);

  const targetValues = {
    trainersCount: 68,
    membersCount: 302,
    lbsLostCount: 6942,
    fitnessProgramsCount: 22,
  };

  useEffect(() => {
    let interval;

    const updateCounts = () => {
      const step = 1;

      setTrainersCount((prevCount) =>
        prevCount < targetValues.trainersCount
          ? prevCount + step
          : targetValues.trainersCount
      );
      setMembersCount((prevCount) =>
        prevCount < targetValues.membersCount
          ? prevCount + step + 2
          : targetValues.membersCount
      );
      setLbsLostCount((prevCount) =>
        prevCount < targetValues.lbsLostCount
          ? prevCount + step + 40
          : targetValues.lbsLostCount
      );
      setFitnessProgramsCount((prevCount) =>
        prevCount < targetValues.fitnessProgramsCount
          ? prevCount + step
          : targetValues.fitnessProgramsCount
      );
    };

    const handleScroll = () => {
      const countsSection = document.getElementById("counts-section");
      if (countsSection) {
        const countsSectionRect = countsSection.getBoundingClientRect();
        const isVisible = countsSectionRect.top < window.innerHeight;
        setIsInView(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (isInView) {
      interval = setInterval(updateCounts, 10);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView, targetValues]);

  return (
    <>
      <div className="blur blur-counts"></div>
      <div id="counts-section" className="container counts">
        <div className="row justify-content-around">
          <div className="count col-lg-3 col-md-3 col-sm-6">
            <div className="numbers">{trainersCount}+</div>
            <div className="text">Trainers</div>
          </div>
          <div className="count col-lg-3 col-md-3 col-sm-6">
            <div className="numbers">{membersCount}+</div>
            <div className="text">Members</div>
          </div>
          <div className="count col-lg-3 col-md-3 col-sm-6">
            <div className="numbers">{lbsLostCount}+</div>
            <div className="text">lbs Lost</div>
          </div>
          <div className="count col-lg-3 col-md-3 col-sm-6">
            <div className="numbers">{fitnessProgramsCount}+</div>
            <div className="text">Programs</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counts;
