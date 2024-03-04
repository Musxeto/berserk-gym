import React from "react";
import { FaDumbbell } from "react-icons/fa";
import "./WhyUs.css"; // Assuming you have a CSS file for additional styling

const WhyUsReasons = () => {
  return (
    <div>
      <h3>At Berserk Gym</h3>
      <ul className="reasons-list">
        <li>
          <FaDumbbell /> Strength Training, Yoga, Boxing, and MMA all in one
          place.
        </li>
        <li>
          <FaDumbbell /> Free 1-Month Creatine Supply & Nutrition Programme.
        </li>
        <li>
          <FaDumbbell /> Expert trainers for personalized guidance.
        </li>
        <li>
          <FaDumbbell /> Friendly and motivating community.
        </li>
        <li>
          <FaDumbbell /> Modern fitness equipment.
        </li>
      </ul>
    </div>
  );
};

export default WhyUsReasons;
