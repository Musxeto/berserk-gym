import React from "react";
import { FaDumbbell } from "react-icons/fa";
import "./WhyUs.css"; // Assuming you have a CSS file for additional styling

const WhyUsReasons = () => {
  const blackIconStyle = {
    color: "#e07000",
  };

  return (
    <div>
      <div className="list-heading align-text-center">At Berserk Gym</div>
      <ul className="reasons-list">
        <li>
          <FaDumbbell style={blackIconStyle} /> Strength Training, Yoga, Boxing,
          and MMA all in one place.
        </li>
        <li>
          <FaDumbbell style={blackIconStyle} /> Free 1-Month Creatine Supply &
          Nutrition Programme.
        </li>
        <li>
          <FaDumbbell style={blackIconStyle} /> Expert trainers for personalized
          guidance.
        </li>
        <li>
          <FaDumbbell style={blackIconStyle} /> Friendly and motivating
          community.
        </li>
        <li>
          <FaDumbbell style={blackIconStyle} /> Modern fitness equipment.
        </li>
      </ul>
    </div>
  );
};

export default WhyUsReasons;
