import React from "react";
import LogoSlider from "./LogoSlider";
import { GoArrowRight } from "react-icons/go";
import comparingCar from "../../assets/sponsors/comparing-car.png";

const Quality = () => {
  return (
    <section className="mt-[60px]">
      <h1 className="font-black text-[28px] md:text-4xl leading-[42px] md:leading-[52px] text-center md:px-28">
        <span className="text-cw-secondary">Soins de voiture de qualité</span>{" "}
        <span className="text-cw-primary">à chaque fois</span>
      </h1>
      <p className="text-center leading-6 md:px-20">
        Notre mission est de fournir un service constant et impeccable, en
        assurant que votre voiture reste propre et éclatante à chaque visite.
        Faites-nous confiance pour prendre soin de votre véhicule avec un
        service de qualité supérieure.
      </p>
      <LogoSlider />
      <div className="flex justify-center">
        <button className="px-[30px] py-[12px] bg-cw-primary mt-10 rounded-md flex items-center gap-x-[16px]">
          <span className="text-[18px] leading-[21px] text-white">
            Learn More
          </span>
          <span className="bg-white rounded-full p-[7px]">
            <GoArrowRight />
          </span>
        </button>
      </div>
      <div className="flex justify-center md:px-20">
        <img className="md:w-full" src={comparingCar} alt="car" />
      </div>
    </section>
  );
};

export default Quality;
