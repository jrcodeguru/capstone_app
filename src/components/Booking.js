import React from "react";
import BookingForm from "./BookingForm";

const Booking = ({ availableTimes = [], dispatch, submitForm }) => {
  return (
    <BookingForm
      availableTimes={["10:00 AM", "12:00 PM"]}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );
};

export default Booking;
