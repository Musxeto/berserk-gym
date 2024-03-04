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
        Math.min(prevCount + step, targetValues.trainersCount)
      );
      setMembersCount((prevCount) =>
        Math.min(prevCount + step, targetValues.membersCount)
      );
      setLbsLostCount((prevCount) =>
        Math.min(prevCount + step + 40, targetValues.lbsLostCount)
      );
      setFitnessProgramsCount((prevCount) =>
        Math.min(prevCount + step, targetValues.fitnessProgramsCount)
      );

      if (
        trainersCount < targetValues.trainersCount ||
        membersCount < targetValues.membersCount ||
        lbsLostCount < targetValues.lbsLostCount ||
        fitnessProgramsCount < targetValues.fitnessProgramsCount
      ) {
        requestAnimationFrame(updateCounts);
      }
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

    if (isInView || window.screen.width < 1100) {
      interval = setInterval(updateCounts, 200);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    isInView,
    targetValues.trainersCount,
    targetValues.membersCount,
    targetValues.lbsLostCount,
    targetValues.fitnessProgramsCount,
  ]);

  return (
    <>
      <div className="blur blur-counts"></div>
      <div id="counts-section" className="container counts">
        <div className="row justify-content-around ">
          <div className="count col-lg-3 col-md-3 col-sm-3">
            <div className="numbers ">{trainersCount}+</div>
            <div className="text">Trainers</div>
          </div>
          <div className="count col-lg-3 col-md-3 col-sm-3">
            <div className="numbers ">{membersCount}+</div>
            <div className="text">Members</div>
          </div>
          <div className="count col-lg-3 col-md-3 col-sm-3">
            <div className="numbers ">{lbsLostCount}+</div>
            <div className="text">lbs Lost</div>
          </div>
          <div className="count col-lg-3 col-md-3 col-sm-3">
            <div className="numbers ">{fitnessProgramsCount}+</div>
            <div className="text">Programs</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counts;
