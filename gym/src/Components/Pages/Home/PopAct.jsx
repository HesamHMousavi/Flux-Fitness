import React from "react";
import "./PopAct.css";
import gym from "../../../Imgs/gym.jpg";
import yoga from "../../../Imgs/yoga.jpg";
import pool from "../../../Imgs/pool.jpg";
import ten from "../../../Imgs/ten.jpg";
import { useNavigate } from "react-router";

const PopAct = () => {
  const nav = useNavigate();
  const activities = [
    { name: "Gym", image: gym },
    { name: "Yoga", image: yoga },
    { name: "Swimming", image: pool },
    { name: "Tennis", image: ten },
  ];
  return (
    <div className="mgt-5">
      <h2 className="h2-mid text-center mgt-2">Popular Activities</h2>
      <div className="pop-act max-width mgt-2 mgb-2 flex-row-between gap-2">
        {activities.map((activity, index) => (
          <div key={index} className="card">
            <img
              src={activity.image}
              alt={activity.name}
              className="card-image"
            />
            <div className="overlay">
              <h3 className=" text-color-white">{activity.name}</h3>
              <button
                className="btn btn-local mgt-5px "
                onClick={() => nav("/activities")}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopAct;
