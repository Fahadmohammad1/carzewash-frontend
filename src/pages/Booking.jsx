import React from "react";
import BookingForm from "../components/home/BookingForm";

const Booking = () => {
  return (
    <div className="px-5">
      <h1 className="font-black text-[28px] leading-[42px] text-center mt-[47px] mb-8">
        <span className="text-cw-secondary">Réservation de votre</span>{" "}
        <span className="text-cw-primary">forfait spécial</span>
      </h1>
      <BookingForm />
    </div>
  );
};

export default Booking;
