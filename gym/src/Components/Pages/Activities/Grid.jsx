import React, { useState } from "react";
import "./Grid.css"; // Import the CSS file
import img1 from "../../../Imgs/gym.jpg";
import img2 from "../../../Imgs/pool.jpg";
import img3 from "../../../Imgs/ten.jpg";
import img4 from "../../../Imgs/yoga.jpg";
import img5 from "../../../Imgs/img5.jpg";
import img6 from "../../../Imgs/img6.jpg";
import img7 from "../../../Imgs/img7.jpg";
import img8 from "../../../Imgs/img8.jpg";
import BookingModal from "../../BookingModal/BookingModal";

const activities = [
  {
    title: "Gym",
    description:
      "State-of-the-art equipment for strength training and cardio workouts. Personal trainers available.",
    price: "£30/month",
    image: img1,
  },
  {
    title: "Yoga Classes",
    description:
      "Expert-led yoga sessions for all levels. Multiple styles including Hatha, Vinyasa, and more.",
    price: "£15/class",
    image: img2,
  },
  {
    title: "Gym",
    description:
      "State-of-the-art equipment for strength training and cardio workouts. Personal trainers available.",
    price: "£30/month",
    image: img3,
  },
  {
    title: "Yoga Classes",
    description:
      "Expert-led yoga sessions for all levels. Multiple styles including Hatha, Vinyasa, and more.",
    price: "£15/class",
    image: img4,
  },
  {
    title: "Strength & Conditioning",
    description:
      "State-of-the-art equipment for strength training and cardio workouts. Personal trainers available.",
    price: "£30/month",
    image: img5,
  },
  {
    title: "Cardio & High-Intensity Training",
    description:
      "Expert-led yoga sessions for all levels. Multiple styles including Hatha, Vinyasa, and more.",
    price: "£15/class",
    image: img6,
  },
  {
    title: "Functional & Mobility Training",
    description:
      "State-of-the-art equipment for strength training and cardio workouts. Personal trainers available.",
    price: "£30/month",
    image: img7,
  },
  {
    title: "Boxing",
    description:
      "Expert-led yoga sessions for all levels. Multiple styles including Hatha, Vinyasa, and more.",
    price: "£15/class",
    image: img8,
  },
];

const ActivitiesGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState("");

  // Function to open the modal with the selected activity
  const openModal = (activity) => {
    setSelectedActivity(activity);
    setModalOpen(true);
  };

  return (
    <div className="activities-container">
      <h2 className="h2-mid mgb-2">Our Activities</h2>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <div className="activity-card" key={index}>
            <img
              src={activity.image}
              alt={activity.title}
              className="activity-image"
            />
            <div className="activity-content">
              <h3 className="activity-title">{activity.title}</h3>
              <div className="flex">
                <div className="mgr-1">
                  <p className="activity-description">{activity.description}</p>
                  <p className="activity-price">
                    From <span>{activity.price}</span>
                  </p>
                </div>
                <div className="flex">
                  {/* UPDATED BUTTON: Calls openModal() */}
                  <button
                    className="book-now"
                    style={{ marginTop: "auto" }}
                    onClick={() => openModal(activity)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        activity={selectedActivity}
      />
    </div>
  );
};

export default ActivitiesGrid;
