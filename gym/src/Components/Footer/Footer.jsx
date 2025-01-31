import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark-blue">
      <div className=" max-width footer flex gap-1">
        <div className="footer-item flex-column ">
          <h3 className="h3-mid text-color-white mgb-1 mgt-5">Flux Fitness</h3>
          <div className="flex-column">
            <h4 className="h4-light text-color-mid-gray mgt-1">
              Your premium fitness destination for a healthier lifestyle.
            </h4>
          </div>
        </div>
        <div className="footer-item flex-column ">
          <h3 className="h3-mid text-color-white mgb-1 mgt-5">Quick Links</h3>
          <div className="flex-column">
            <h4 className="h4-light text-color-mid-gray mgt-1 pointer">
              Abut us
            </h4>
            <h4 className="h4-light text-color-mid-gray mgt-1 pointer">
              Activities
            </h4>
            <h4 className="h4-light text-color-mid-gray mgt-1 pointer">
              Facilities
            </h4>
            <h4 className="h4-light text-color-mid-gray mgt-1 pointer">
              Book Now
            </h4>
          </div>
        </div>
        <div className="footer-item flex-column ">
          <h3 className="h3-mid text-color-white mgb-1 mgt-5">Contact us</h3>
          <div className="flex-column">
            <h3 className="h4-light text-color-mid-gray mgt-1">
              123 Fitness Street
            </h3>
            <h3 className="h4-light text-color-mid-gray mgt-1">
              +1 234 567 890
            </h3>
            <h3 className="h4-light text-color-mid-gray mgt-1">
              info@sportcenter.com
            </h3>
          </div>
        </div>
        <div className="footer-item flex-column ">
          <h3 className="h3-mid text-color-white mgb-1 mgt-5">Follow us</h3>
          <div className="flex gap-1 mgt-1">
            <FaInstagram className="text-color-mid-gray pointer" size={26} />
            <FaFacebook className="text-color-mid-gray pointer" size={24} />
            <BsTwitterX className="text-color-mid-gray pointer" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
