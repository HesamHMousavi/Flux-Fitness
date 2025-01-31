import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdPerson2 } from "react-icons/md";
import "./Reviews.css"; // Import the CSS file

const testimonials = [
  {
    name: "Sarah Mitchell",
    memberSince: "2024",
    text: "The facilities here are top-notch! I've been a member for over a year and the equipment is always well-maintained. The trainers are knowledgeable and supportive.",
    rating: 5,
    avatar: "https://via.placeholder.com/40",
  },
  {
    name: "John Cooper",
    memberSince: "2021",
    text: "I love the variety of classes offered here. From yoga to HIIT, there's something for everyone. The instructors are passionate and motivating!",
    rating: 5,
    avatar: "https://via.placeholder.com/40",
  },
  {
    name: "Emma Rodriguez",
    memberSince: "2023",
    text: "The community here is amazing! Everyone is friendly and supportive. The cleanliness and safety protocols are also impressive. Highly recommend!",
    rating: 4,
    avatar: "https://via.placeholder.com/40",
  },
];

const TestimonialCard = ({ name, memberSince, text, rating, avatar }) => {
  return (
    <div className="testimonial-card">
      <div className="rating">
        {Array.from({ length: 5 }).map((_, index) =>
          index < rating ? (
            <FaStar className="rating text-color-blue" />
          ) : (
            <FaRegStar className="rating text-color-blue" />
          )
        )}
      </div>
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-footer">
        <MdPerson2 size={40} className="text-color-blue mgr-1" />
        <div>
          <h4 className="h4-hi">{name}</h4>
          <p className="member-since">Member since {memberSince}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div className="max-width">
        <h2 className="h2-mid">What Our Members Say</h2>
        <p className="section-subtitle mgt-2 mgb-1">
          Hear from our satisfied members about their experiences at our sports
          center
        </p>
        <div className="flex-row-center gap-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
