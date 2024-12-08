import React, { useState } from "react";
import user from "../../assets/bookingForm/user.png";
import phone from "../../assets/bookingForm/phone.png";
import car from "../../assets/bookingForm/car.png";
import date from "../../assets/bookingForm/date.png";
import clock from "../../assets/bookingForm/clock.png";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const BookingForm = () => {
  const today = new Date().toISOString().split("T")[0];
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const timeOptions = [
    "9:00 AM",
    "9:15 AM",
    "9:30 AM",
    "9:45 AM",
    "10:00 AM",
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
    "11:45 AM",
    "12:00 PM",
    "12:15 PM",
    "12:30 PM",
    "12:45 PM",
    "1:00 PM",
    "1:15 PM",
    "1:30 PM",
    "1:45 PM",
    "2:00 PM",
    "2:15 PM",
    "2:30 PM",
    "2:45 PM",
    "3:00 PM",
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    const { fullName, phone, carModel, date, time, formula } = formData;

    const bookingInfo = {
      fullName,
      phone,
      carModel,
      date,
      time,
      slot: time.includes("AM") ? "morning" : "noon",
      formula,
    };

    try {
      const res = await fetch("http://localhost:5000/api/booking/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingInfo),
      });

      if (res.ok) {
        toast.success("Booking Successfull");
      } else {
        toast.error("Booking failed");
      }

      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-[26px] md:mt-[60px] border-[2px] rounded-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-5 md:px-8 py-8 flex flex-col gap-y-3 md:gap-y-6"
      >
        <div className="lg:flex lg:gap-x-6">
          <label className="flex items-center gap-[10px] rounded-[10px] border-[1px] py-3 px-[18px] md:px-5 lg:w-full ">
            <img src={user} alt="" />
            <input
              {...register("fullName", { required: true })}
              type="text"
              className="border-0"
              name="fullName"
              id="fullName"
              placeholder="Votre nom complet"
            />
          </label>
          {errors.fullName && (
            <span className="text-red-400">Name is required</span>
          )}

          {/* phone */}
          <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-5 lg:gap-x-6 md:gap-y-6">
            <label className="flex items-center gap-[10px] rounded-[10px] border-[1px] py-3 px-[18px] md:px-5 md:w-full lg:w-[260px]">
              <img src={phone} alt="" />
              <input
                {...register("phone", { required: true })}
                type="number"
                className="border-0"
                name="phone"
                id="phone"
                placeholder="téléphone"
              />
            </label>
            {errors.phone && (
              <span className="text-red-400">Téléphone is required</span>
            )}

            {/* car model */}
            <label className="flex items-center gap-[10px] rounded-[10px] border-[1px] py-3 px-[18px] md:px-5 md:w-full">
              <img src={car} alt="" />
              <input
                {...register("carModel", { required: true })}
                type="text"
                className="border-0"
                name="carModel"
                id="carModel"
                placeholder="modèle de voiture"
              />
            </label>
            {errors.carModel && (
              <span className="text-red-400">Name is required</span>
            )}
          </div>
        </div>

        {/* booking date */}
        <div className="lg:flex lg:gap-x-6">
          <div className="flex justify-between md:gap-x-5">
            <label className="flex items-center gap-[10px] rounded-[10px] border py-3 px-[18px] w-[134px] md:px-5 md:w-full lg:w-[260px]">
              <img src={date} alt="date icon" />
              <input
                {...register("date", { required: true })}
                type="date"
                className="border-0 w-[73px] lg:w-full text-gray-500"
                name="date"
                id="date"
                min={today}
                placeholder="Booking Date"
              />
            </label>
            {errors.date && (
              <span className="text-red-400">Date is required</span>
            )}

            {/* Time */}
            <label className="flex items-center gap-[10px] rounded-[10px] border py-3 px-[18px] w-[134px] md:px-5 md:w-full lg:w-[260px]">
              <img src={clock} alt="Clock Icon" />
              <select
                {...register("time", { required: true })}
                className="border-0 w-full text-gray-500 focus:outline-none bg-white"
              >
                <option value="" disabled>
                  Select Time
                </option>
                {timeOptions.map((time, i) => (
                  <option key={i} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </label>
            {errors.time && (
              <span className="text-red-400">Time is required</span>
            )}
          </div>

          {/* Package */}
          <label className="flex items-center gap-[10px] rounded-[10px] border py-3 px-[18px] w-[134px] md:px-5 md:w-full lg:w-[260px]">
            <select
              className="border-0 lg:w-full text-gray-500 focus:outline-none bg-white"
              {...register("formula", { required: true })}
            >
              <option value="Classique" defaultChecked>
                Formula Classique
              </option>
              <option value="Premium">Formula Premium</option>
              <option value="Prestige">Formula Prestige</option>
            </select>
          </label>
          {errors.formula && (
            <span className="text-red-400">Formula is required</span>
          )}
        </div>

        <p className="mb-8 text-gray-400 italic">
          Vous serez contacté dans les plus brefs délais
        </p>
        <button
          type="submit"
          className="px-[51px] py-[17px] bg-cw-primary rounded-md lg:w-fit"
        >
          Réservation
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
