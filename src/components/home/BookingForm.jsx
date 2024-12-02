import React from "react";

const BookingForm = () => {
  return (
    <section className="mt-[26px] border-[2px] rounded-xl">
      <div className="px-5 py-8">
        <label className="flex items-center gap-2 rounded-[10px] border-[1px] py-3 px-[18px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="border-0"
            name="fullname"
            id="fullname"
            placeholder="Votre nom complet"
          />
        </label>
      </div>
    </section>
  );
};

export default BookingForm;
