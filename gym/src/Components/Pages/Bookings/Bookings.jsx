import React from "react";
import Header from "../../Header/Header";
import BookingsDashboard from "./BookingsDash";


const Bookings = () => {
  return (
    <div>
      <div className="border-bottom-1">
        <Header />
      </div>
      <BookingsDashboard />
    </div>
  );
};

export default Bookings;
