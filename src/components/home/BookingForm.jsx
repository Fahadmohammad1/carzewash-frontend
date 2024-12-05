import React from "react";
import user from "../../assets/bookingForm/user.png";
import phone from "../../assets/bookingForm/phone.png";
import car from "../../assets/bookingForm/car.png";
import date from "../../assets/bookingForm/date.png";
import clock from "../../assets/bookingForm/clock.png";

const BookingForm = () => {
  return (
    <section className="mt-[26px] md:mt-[60px] border-[2px] rounded-xl">
      <div className="px-5 py-8 flex flex-col gap-y-3">
        <label className="flex items-center gap-[10px] rounded-[10px] border-[1px] py-3 px-[18px] ">
          <img src={user} alt="" />
          <input
            type="text"
            className="border-0"
            name="fullname"
            id="fullname"
            placeholder="Votre nom complet"
          />
        </label>
        <label className="flex items-center gap-[10px] rounded-[10px] border-[1px] py-3 px-[18px]">
          <img src={phone} alt="" />
          <input
            type="text"
            className="border-0"
            name="phone"
            id="phone"
            placeholder="téléphone"
          />
        </label>
        <label className="flex items-center gap-[10px] rounded-[10px] border-[1px] py-3 px-[18px]">
          <img src={car} alt="" />
          <input
            type="text"
            className="border-0"
            name="car"
            id="car"
            placeholder="Car Model"
          />
        </label>
        <div className="flex justify-between">
          <label className="flex items-center gap-[10px] rounded-[10px] border py-3 px-[18px] w-[134px]">
            <img src={date} className="" alt="" />
            <input
              type="text"
              className="border-0 w-[73px]"
              name="car"
              id="car"
              placeholder="Car Model"
            />
          </label>
          <label className="flex items-center gap-[10px] rounded-[10px] border py-3 px-[18px] w-[134px]">
            <img src={clock} className="" alt="" />
            <input
              type="text"
              className="border-0 w-[73px]"
              name="car"
              id="car"
              placeholder="Car Model"
            />
          </label>
        </div>
        <select className="px-[18px] py-5 bg-white border rounded-[10px] text-gray-400 mb-3">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <p className="mb-8 text-gray-400 italic">
          Vous serez contacté dans les plus brefs délais
        </p>
        <button className="px-[51px] py-[17px] bg-cw-primary rounded-md">
          Réservation
        </button>
      </div>
    </section>
  );
};

export default BookingForm;
