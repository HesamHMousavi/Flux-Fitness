import React from "react";
import "./FacilitiesGrid.css"; // Import the CSS file
import { FaShower, FaCar } from "react-icons/fa6";
import { IoIosCafe } from "react-icons/io";

const facilities = [
  {
    title: "Changing Rooms",
    description: "Modern changing facilities with lockers and shower areas",
    Icon: FaShower, // Replace with actual icon/image
  },
  {
    title: "Parking",
    description: "Free parking available for members",
    Icon: FaCar, // Replace with actual icon/image
  },
  {
    title: "Café",
    description: "Healthy snacks and refreshments available",
    Icon: IoIosCafe,
  },
];

const FacilitiesGrid = () => {
  return (
    <div className="facilities-container">
      <h2 className="facilities-title">Our Facilities</h2>
      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div className="facility-card" key={index}>
            <div className="facility-icon">
              <facility.Icon />
            </div>
            <h3 className="facility-title mgb-1">{facility.title}</h3>
            <p className="facility-description">{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesGrid;
