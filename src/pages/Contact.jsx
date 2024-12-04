import React from "react";
import facebook from "../assets/footer/Facebook.png";
import instagram from "../assets/footer/Instagram.png";
import whatsapp from "../assets/footer/Whatsapp.png";
import phone from "../assets/contact/phone.png";
import mail from "../assets/contact/mail.png";
import location from "../assets/contact/location.svg";
import user from "../assets/bookingForm/user.png";
import phone2 from "../assets/bookingForm/phone.png";
import car from "../assets/bookingForm/car.png";
import date from "../assets/bookingForm/date.png";

const Contact = () => {
  return (
    <section>
      <h1 className="font-black text-[28px] leading-[42px] text-center mt-[47px] mb-8 px-10">
        <span className="text-cw-secondary">Contact avec</span>{" "}
        <span className="text-cw-primary">Carzewash</span>
      </h1>
      <div className="bg-cw-secondary px-5 py-10">
        <h2 className="text-[28px] leading-[42px] font-medium text-white">
          Nous sommes engagés Pour vous aider
        </h2>
        <p className="text-base leading-[24px] mt-3 text-base-100 mb-[42px]">
          Notre équipe dévouée est prête à vous fournir le meilleur service
          possible, répondant à vos besoins avec professionnalisme et attention.
        </p>
        <div className="text-white">
          <div className="flex text-xl gap-x-4 items-center">
            <img src={phone} alt="phone icon" /> <p>07 75 79 96 98</p>
          </div>
          <div className="flex text-xl gap-x-4 items-center mt-7">
            <img src={mail} alt="mail icon" /> <p>carzewash@gmail.com</p>
          </div>
          <div className="flex text-xl gap-x-4 items-center mt-7">
            <img src={location} alt="location icon" /> <p>Ajaccio, France</p>
          </div>
        </div>
        <div className="mt-20 flex gap-x-5">
          <img src={facebook} alt="facebook logo" />
          <img src={instagram} alt="instagram logo" />
          <img src={whatsapp} alt="whatsapp logo" />
        </div>
      </div>
      <div>
        <div className="px-5 py-8 flex flex-col gap-y-4">
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
            <img src={phone2} alt="" />
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
              type="email"
              className="border-0"
              name="email"
              id="email"
              placeholder="Adresse email"
            />
          </label>
          <textarea
            className="rounded-[10px] border-[1px] pt-3 pb-10 px-[18px]"
            name="message"
            id="message"
            placeholder="Écrivez votre message......."
          >
            Écrivez votre message.......
          </textarea>
          <button className="px-[51px] py-[17px] bg-cw-primary rounded-md mt-4">
            Réservation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
