import React from "react";
import BookingForm from "../BookingForm";
import "./Booking.css";

const Booking = () => {
  return (
    <main className="booking-section">
      <div className="booking-content">
        <div className="booking-text-section">
          <h1 style={{ marginBottom: "40px" }}>Booking a table</h1>
          <BookingForm />
        </div>
        <img
          className="booking-img"
          src="https://munchafrica.ca/wp-content/uploads/2022/09/munch-about.jpg"
          alt="brother cooking"
        />
      </div>
    </main>
  );
};

export default Booking;
