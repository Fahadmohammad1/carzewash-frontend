import React from "react";
import LogoSlider from "./LogoSlider";
import { GoArrowRight } from "react-icons/go";
import comparingCar from "../../assets/sponsors/comparing-car.png";
import logo1 from "../../assets/sponsors/logo1.jpeg";
import logo2 from "../../assets/sponsors/logo2.png";
import logo3 from "../../assets/sponsors/logo3.jpeg";

const Quality = () => {
  return (
    <section className="mt-[60px] lg:mt-[120px]">
      <div className="lg:flex lg:gap-x-[65px]">
        <div>
          <h1 className="font-black text-[28px] lg:text-[52px] md:text-4xl leading-[42px] md:leading-[52px] text-center md:px-28 lg:px-0 lg:leading-[68px] lg:text-start">
            <span className="text-cw-secondary">
              Soins de voiture de qualité
            </span>{" "}
            <span className="text-cw-primary">à chaque fois</span>
          </h1>
          <p className="text-center leading-6 md:px-20 lg:px-0 lg:text-start lg:mt-6">
            Notre mission est de fournir un service constant et impeccable, en
            assurant que votre voiture reste propre et éclatante à chaque
            visite. Faites-nous confiance pour prendre soin de votre véhicule
            avec un service de qualité supérieure.
          </p>
          <div className="hidden lg:flex gap-x-8">
            <img className="w-[93px]" src={logo1} alt="logo" />
            <img className="w-[200px]" src={logo2} alt="logo" />
            <img className="w-[130px]" src={logo3} alt="logo" />
          </div>
          <LogoSlider />
          <div className="flex justify-center lg:justify-start">
            <button className="px-[30px] py-[12px] bg-cw-primary mt-10 rounded-md flex items-center gap-x-[16px]">
              <span className="text-[18px] leading-[21px] text-white">
                Learn More
              </span>
              <span className="bg-white rounded-full p-[7px]">
                <GoArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-center md:px-20 lg:px-0 lg:w-full">
          <img className="md:w-full lg:w-full" src={comparingCar} alt="car" />
        </div>
      </div>
    </section>
  );
};

export default Quality;
