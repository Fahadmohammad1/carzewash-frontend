import React from "react";
import facebook from "../../assets/footer/Facebook.png";
import instagram from "../../assets/footer/Instagram.png";
import whatsapp from "../../assets/footer/Whatsapp.png";
import { LuClock4 } from "react-icons/lu";

const Footer = () => {
  return (
    <section className="bg-cw-secondary px-5 mt-[60px] pt-[60px] pb-5">
      <h2 className="text-[24px] leading-[36px] font-bold text-center text-white">
        Lavez votre voiture avec Carzewash!
      </h2>
      <p className="text-base leading-[24px] mt-3 text-base-100 text-center">
        Nous ne sommes pas seulement des laveurs de voitures, pour nous la
        voiture est comme une précieuse pièce d’ingénierie et nous préservons la
        beauté de ce produit en le lavant avec notre passion.
      </p>
      <div className="mt-8 flex gap-x-5 justify-center">
        <img src={facebook} alt="facebook logo" />
        <img src={instagram} alt="instagram logo" />
        <img src={whatsapp} alt="whatsapp logo" />
      </div>
      <div className="mt-[60px]">
        <h4 className="font-bold text-2xl text-cw-primary leading-7">
          Navigation
        </h4>
        <p className="mt-3 text-white">Accueil</p>
        <p className="mt-3 text-white">Tarification</p>
        <p className="mt-3 text-white">Contact</p>
        <p className="mt-3 text-white">Réservation</p>
      </div>
      <div className="mt-10">
        <h4 className="font-bold text-2xl text-cw-primary leading-7">
          Services
        </h4>
        <p className="mt-3 text-white">Classique</p>
        <p className="mt-3 text-white">Premium</p>
        <p className="mt-3 text-white">Prestige</p>
      </div>
      <div className="mt-10">
        <h4 className="font-bold text-2xl text-cw-primary leading-7">
          Booking Time
        </h4>
        <p className="mt-5 text-white flex gap-x-3 items-center leading-[26px]">
          <LuClock4 className="text-[20px]" />
          9AM - 3PM
        </p>
        <p className="mt-5 text-white">Closed Sta & Sun</p>
      </div>
      <p className="text-[14px] leading-6 text-base-100 mt-10">
        © 2024 CARZEWASH • Tous droits réservés
      </p>
    </section>
  );
};

export default Footer;