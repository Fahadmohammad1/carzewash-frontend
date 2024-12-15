import React, { useState } from "react";
import user from "../../assets/bookingForm/user.svg";
import phone from "../../assets/bookingForm/phone.svg";
import car from "../../assets/bookingForm/car.svg";
import date from "../../assets/bookingForm/date.svg";
import clock from "../../assets/bookingForm/clock.svg";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loader from "../shared/Loader";

const BookingForm = () => {
  const today = new Date().toISOString().split("T")[0];
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const timeOptions = [
    "9:00",
    "9:15",
    "9:30",
    "9:45",
    "10:00",
    "10:15",
    "10:30",
    "10:45",
    "11:00",
    "11:15",
    "11:30",
    "11:45",
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
    "13:45",
    "14:00",
    "14:15",
    "14:30",
    "14:45",
    "15:00",
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
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/booking/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingInfo),
        }
      );

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

  if (loading) {
    return <Loader />;
  }

  return (
    <section
      data-aos="zoom-in"
      style={{ boxShadow: "0px 8px 26px 0px #3C98CC2B" }}
      className="mt-[26px] md:mt-[60px] border-[2px] rounded-xl"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-5 md:px-8 py-8 flex flex-col gap-y-4 md:gap-y-6"
      >
        <div className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row lg:gap-x-6">
          <div className="lg:w-full">
            <label className="flex items-center gap-[10px] rounded-[10px] border-[2px] py-3 px-[18px] md:px-5 lg:w-full">
              <img src={user} className="lg:w-[26px] opacity-40" alt="icon" />
              <input
                {...register("fullName", { required: true })}
                type="text"
                className="outline-none placeholder-cw-secondary placeholder-opacity-60"
                name="fullName"
                id="fullName"
                placeholder="Votre nom complet"
              />
            </label>
            {errors.fullName && (
              <span className="text-red-400 block mt-2">Name is required</span>
            )}
          </div>

          {/* phone */}
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-5 lg:gap-x-6 md:gap-y-6">
            <div>
              <label className="flex items-center gap-[10px] rounded-[10px] border-[2px] py-3 px-[18px] md:px-5 md:w-full lg:w-[260px]">
                <img
                  src={phone}
                  className="lg:w-[20px] opacity-40"
                  alt="icon"
                />
                <input
                  {...register("phone", { required: true })}
                  type="number"
                  className="outline-none placeholder-cw-secondary placeholder-opacity-60"
                  name="phone"
                  id="phone"
                  placeholder="téléphone"
                />
              </label>
              {errors.phone && (
                <span className="text-red-400 block mt-2">
                  Téléphone is required
                </span>
              )}
            </div>

            {/* car model */}
            <div>
              <label className="flex items-center gap-[10px] rounded-[10px] border-[2px] py-3 px-[18px] md:px-5 md:w-full">
                <img src={car} className="lg:w-[20px] opacity-40" alt="icon" />
                <input
                  {...register("carModel", { required: true })}
                  type="text"
                  className="outline-none placeholder-cw-secondary placeholder-opacity-60"
                  name="carModel"
                  id="carModel"
                  placeholder="modèle de voiture"
                />
              </label>
              {errors.carModel && (
                <span className="text-red-400 block mt-2">
                  Car Model is required
                </span>
              )}
            </div>
          </div>
        </div>

        {/* booking date */}
        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-6">
          <div className="flex flex-col gap-y-4 md:flex-row gap-x-4 md:gap-x-5">
            <div>
              <label className="flex items-center gap-[10px] rounded-[10px] border-[2px] py-3 px-[18px] w-full md:px-5 md:w-full lg:w-[260px]">
                <img
                  src={date}
                  className="lg:w-[20px] opacity-40"
                  alt="date icon"
                />
                <input
                  {...register("date", { required: true })}
                  type="date"
                  className="outline-none w-full lg:w-full md:w-full text-cw-secondary text-opacity-60"
                  name="date"
                  id="date"
                  min={today}
                  placeholder="Booking Date"
                />
              </label>
              {errors.date && (
                <span className="text-red-400 block mt-2">
                  Date is required
                </span>
              )}
            </div>

            {/* Time */}
            <div>
              <label className="flex items-center gap-[10px] rounded-[10px] border-[2px] py-3 px-[18px] w-full md:px-5 md:w-full lg:w-[260px]">
                <img
                  src={clock}
                  className="lg:w-[20px] opacity-40"
                  alt="Clock Icon"
                />
                <select
                  {...register("time", { required: true })}
                  className="border-0 w-full text-cw-secondary text-opacity-60 focus:outline-none bg-white"
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
                <span className="text-red-400 block mt-2">
                  Time is required
                </span>
              )}
            </div>
          </div>

          {/* Package */}
          <div>
            <label className="flex items-center gap-[10px] rounded-[10px] border-[2px] py-3 px-[18px] w-full md:px-5 md:w-full lg:w-[260px]">
              <select
                className="border-0 w-full text-cw-secondary text-opacity-60 focus:outline-none bg-white"
                {...register("formula", { required: true })}
              >
                <option value="Classique" defaultChecked>
                  Formule Classique
                </option>
                <option value="Premium">Formule Premium</option>
                <option value="Prestige">Formule Prestige</option>
              </select>
            </label>
            {errors.formula && (
              <span className="text-red-400 block mt-2">
                Formule is required
              </span>
            )}
          </div>
        </div>

        <p className="mb-8 text-gray-400 italic font-cw-regular">
          Vous serez contacté dans les plus brefs délais
        </p>
        <button
          type="submit"
          className="px-[51px] py-[17px] bg-cw-primary rounded-md lg:w-fit text-white hover:bg-cw-secondary lg:text-[20px] font-medium md:w-fit transform hover:scale-110 transition duration-150 ease-in-out"
        >
          Réservation
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
