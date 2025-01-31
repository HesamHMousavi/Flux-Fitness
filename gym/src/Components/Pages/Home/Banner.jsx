import React from "react";
import "./Banner.css";
import { FaDumbbell } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import { BsBookmarkCheckFill } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="banner bg-light-gray">
      <div className="max-width">
        <h2 className="h2-mid text-center mgt-2">Why choose us</h2>
        <div className="flex-row-between gap-2 mgt-2">
          <div className="item-choice flex-column-center">
            <FaDumbbell size={40} color="var(--blue)" />
            <h3 className="h3-mid mgt-5px">Modern Equipment</h3>
            <h5 className="h6-mid-gray text-center mgt-1">
              State-of-the-art facilities with the latest fitness equipment
            </h5>
          </div>
          <div className="item-choice flex-column-center">
            <FaPeoplePulling size={40} color="var(--blue)" />
            <h3 className="h3-mid mgt-5px">Expert Trainers</h3>
            <h5 className="h6-mid-gray text-center mgt-1">
              Professional guidance from certified fitness experts
            </h5>
          </div>
          <div className="item-choice flex-column-center">
            <BsBookmarkCheckFill size={40} color="var(--blue)" />
            <h3 className="h3-mid mgt-5px">Modern Equipment</h3>
            <h5 className="h6-mid-gray text-center mgt-1">
              Seamless online booking system for all activities
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
