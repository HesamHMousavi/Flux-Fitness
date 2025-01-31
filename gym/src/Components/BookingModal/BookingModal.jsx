import React from "react";
import "./BookingModal.css"; // Import the CSS file

const BookingModal = ({ isOpen, onClose, activity }) => {
  if (!isOpen || !activity) return null; // Prevent rendering if no activity is selected

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Book Your Activity</h2>

        {/* Select Activity */}
        <label className="modal-label">Select Activity</label>
        <select className="modal-input">
          <option>{activity.title}</option>
        </select>

        {/* Select Date */}
        <label className="modal-label">Select Date</label>
        <input type="date" className="modal-input" />

        {/* Available Time Slots */}
        <label className="modal-label">Available Time Slots</label>
        <div className="time-slots">
          {["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"].map(
            (time, index) => (
              <button key={index} className="time-slot">
                {time}
              </button>
            )
          )}
        </div>

        {/* Duration */}
        <label className="modal-label">Duration</label>
        <select className="modal-input">
          <option>1 Hour</option>
          <option>2 Hours</option>
        </select>

        {/* Price Summary - Dynamically Populated */}
        <div className="price-summary">
          <p>
            <strong>Activity Fee</strong> <span>{activity.price}</span>
          </p>
          <p>
            <strong>Equipment Rental</strong> <span>£3.30</span>
          </p>
          <p className="total">
            <strong>Total</strong>{" "}
            <span>
              £{parseFloat(activity?.price?.replace("£", "") || 0) + 3.3}0
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="modal-buttons">
          <button className="confirm-btn">Confirm Booking</button>
          <button className="close-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
