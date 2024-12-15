import React from "react";
import BookingForm from "../components/home/BookingForm";

const Booking = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <section className="px-5 lg:px-[104px]">
      <h1 className="font-black text-[28px] lg:text-[52px] lg:leading-[80px] leading-[42px] text-center mt-[47px] mb-8 tracking-wide font-cw-primary">
        <span className="text-cw-secondary">RÉSERVATION DE VOTRE</span>
        <br />
        <span className="text-cw-primary">FORFAIT SPÉCIAL</span>
      </h1>
      <BookingForm />
    </section>
  );
};

export default Booking;
