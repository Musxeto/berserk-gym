import React from "react";
import { FaDumbbell } from "react-icons/fa";
import "./WhyUs.css"; // Assuming you have a CSS file for additional styling

const WhyUsReasons = () => {
  return (
    <div>
      <h3>Reasons to Choose Berserk Gym</h3>
      <ul className="reasons-list">
        <li>
          <FaDumbbell /> State-of-the-art fitness equipment.
        </li>
        <li>
          <FaDumbbell /> Expert trainers for personalized guidance.
        </li>
        <li>
          <FaDumbbell /> Diverse and engaging workout programs.
        </li>
        <li>
          <FaDumbbell /> Friendly and motivating community.
        </li>
      </ul>
    </div>
  );
};

export default WhyUsReasons;
