import React, { useState } from "react";
import "./BookingsDash.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import Pagination from "./Pagination";
import { FaDumbbell } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Footer from "../../Footer/Footer";

const initialBookings = [
  {
    id: 1,
    title: "Tennis Court - Court 3",
    date: "Thursday, March 15, 2025",
    time: "10:00 AM - 11:00 AM",
    location: "Indoor Courts",
    status: "Confirmed",
    category: "Tennis",
  },
  {
    id: 2,
    title: "Swimming Pool - Lane 2",
    date: "Friday, March 16, 2025",
    time: "2:00 PM - 3:00 PM",
    location: "Aquatics Center",
    status: "Pending",
    category: "Swimming",
  },
  {
    id: 3,
    title: "Gym Session - Personal Training",
    date: "Saturday, March 17, 2025",
    time: "9:00 AM - 10:00 AM",
    location: "Fitness Center",
    status: "Confirmed",
    category: "Gym",
  },
  {
    id: 4,
    title: "Gym - Weight Training",
    date: "Sunday, March 18, 2025",
    time: "5:00 PM - 6:00 PM",
    location: "Fitness Center",
    status: "Confirmed",
    category: "Gym",
  },
  {
    id: 5,
    title: "Gym - Weight Training",
    date: "Sunday, March 18, 2025",
    time: "5:00 PM - 6:00 PM",
    location: "Fitness Center",
    status: "Confirmed",
    category: "Gym",
  },
  {
    id: 6,
    title: "Gym - Weight Training",
    date: "Sunday, March 18, 2025",
    time: "5:00 PM - 6:00 PM",
    location: "Fitness Center",
    status: "Confirmed",
    category: "Gym",
  },
  {
    id: 7,
    title: "Gym - Weight Training",
    date: "Sunday, March 18, 2025",
    time: "5:00 PM - 6:00 PM",
    location: "Fitness Center",
    status: "Confirmed",
    category: "Gym",
  },
];

const BookingsDashboard = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [search, setSearch] = useState("");
  const [activityFilter, setActivityFilter] = useState("All Activities");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Handle search and filter changes, resetting to page 1
  const handleFilterChange = (e) => {
    setActivityFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  // Filter bookings
  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch = booking.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      activityFilter === "All Activities" ||
      booking.category === activityFilter;
    return matchesSearch && matchesCategory;
  });

  // Paginate filtered results
  const paginatedBookings = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page, perPage) => {
    setCurrentPage(page);
    setItemsPerPage(perPage);
  };

  // Function to delete a booking
  const deleteBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  return (
    <div className="bookings">
      <div className="max-width mgb-2">
        <header className="flex-row-between">
          <div>
            <h2 className="h2-mid">My Bookings</h2>
            <p className="h5-mid mgt-5px">
              Manage your sports activities and reservations
            </p>
          </div>
        </header>
        <div className="stat-con">
          <div className="stat flex gap-2">
            <div className="stat-card flex mgt-1">
              <div className="flex-row-center">
                <FaDumbbell
                  size={20}
                  color="var(--blue)"
                  className="bookings-icon"
                  style={{ backgroundColor: "var(--light-blue)" }}
                />
              </div>
              <div className="mgl-1 flex-column">
                <h5 className="h5-mid">Active Bookings</h5>
                <h3 className="text-start h3-mid">8</h3>
              </div>
            </div>
            <div className="stat-card flex mgt-1">
              <div className="flex-row-center">
                <FaCheck
                  size={20}
                  color="var(--green)"
                  className="bookings-icon"
                  style={{ backgroundColor: "var(--light-green)" }}
                />
              </div>
              <div className="mgl-1 flex-column">
                <h5 className="h5-mid">Confirmed Bookings</h5>
                <h3 className="text-start h3-mid">8</h3>
              </div>
            </div>
            <div className="stat-card flex mgt-1">
              <div className="flex-row-center">
                <FaTrophy
                  size={20}
                  color="var(--purple)"
                  className="bookings-icon"
                  style={{ backgroundColor: "var(--light-purple)" }}
                />
              </div>
              <div className="mgl-1 flex-column">
                <h5 className="h5-mid">Pending Bookings</h5>
                <h3 className="text-start h3-mid">3</h3>
              </div>
            </div>
            <div className="stat-card flex mgt-1">
              <div className="flex-row-center">
                <FaStar
                  size={20}
                  color="var(--orange)"
                  className="bookings-icon"
                  style={{ backgroundColor: "var(--light-orange)" }}
                />
              </div>
              <div className="mgl-1 flex-column">
                <h5 className="h5-mid">Total Bookings</h5>
                <h3 className="text-start h3-mid">12</h3>
              </div>
            </div>
          </div>
        </div>
        {/* Filters */}
        <div className="upcoming-bookings mgt-2">
          <h3 className="h3-mid">Upcoming Bookings</h3>
          <div className="search-filter">
            <div className="search-box">
              🔍{" "}
              <input
                type="text"
                placeholder="Search bookings..."
                value={search}
                onChange={handleSearchChange}
              />
            </div>
            <select
              className="activity-filter"
              value={activityFilter}
              onChange={handleFilterChange}
            >
              <option>All Activities</option>
              <option>Tennis</option>
              <option>Swimming</option>
              <option>Gym</option>
            </select>
          </div>
        </div>

        {/* Booking List */}
        <div className="bookings-list">
          {paginatedBookings.length > 0 ? (
            paginatedBookings.map((booking) => (
              <div key={booking.id} className="booking-item border-bottom-1">
                <FaDumbbell
                  color="var(--blue)"
                  className="bookings-icon-square"
                  style={{ backgroundColor: "var(--light-blue)" }}
                />
                <div className="booking-info">
                  <h4 className="h4-mid">{booking.title}</h4>
                  <p className="h5-mid">
                    {booking.date} • {booking.time}
                  </p>
                  <p className="booking-location">
                    <FaLocationDot
                      size={11}
                      className="mgr-5px"
                      color="var(--blue)"
                    />
                    <a href="/">{booking.location}</a>
                  </p>
                </div>
                <span className={`status ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </span>
                <div className="flex-row-center">
                  <MdEdit size={20} color="var(--mid-gray)" className="mgr-1" />
                  <MdDelete
                    size={20}
                    color="var(--mid-gray)"
                    className="cursor-pointer"
                    onClick={() => deleteBooking(booking.id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No bookings found.</p>
          )}
        </div>

        {/* Pagination */}
        {filteredBookings.length > 0 && (
          <Pagination
            totalItems={filteredBookings.length}
            onPageChange={handlePageChange}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BookingsDashboard;
