import React from "react";
import blackCar from "../../assets/banner/black-car.png";
import wahsingCar1 from "../../assets/banner/washing-car-1.png";
import insideCar1 from "../../assets/banner/inside-car-1.png";
import wahsingCar2 from "../../assets/banner/washing-car-2.png";
import insideCar2 from "../../assets/banner/inside-car-2.png";
import avatar1 from "../../assets/banner/avatar-1.png";
import avatar2 from "../../assets/banner/avatar-2.png";
import avatar3 from "../../assets/banner/avatar-3.png";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <section>
      <div>
        <h1 className="text-[30px] md:text-[52px] leading-[48px] md:leading-[68px] font-black tracking-wide">
          <span className="text-cw-primary">Nous aimons faire</span>{" "}
          <span className="text-cw-secondary">Briller votre voiture</span>
        </h1>
        <p className="text-base leading-[24px] mt-[16px]">
          Nous croyons que chaque voiture mérite de briller comme neuve. Avec
          notre expertise et des produits de qualité, nous assurons que votre
          véhicule retrouve son éclat d’origine à chaque lavage.
        </p>
        <div className="md:flex md:flex-row-reverse md:justify-end">
          <div className="flex gap-x-[18px] mt-[32px] items-center md:ml-[122px]">
            <div className="flex">
              <img
                src={avatar1}
                className="size-[60px] rounded-full"
                alt="image"
              />
              <img
                src={avatar2}
                className="size-[60px] rounded-full -ml-8"
                alt="image"
              />
              <img
                src={avatar3}
                className="size-[60px] rounded-full -ml-8"
                alt="image"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[28px] text-cw-primary leading-[28px] font-black">
                100+
              </p>{" "}
              <p className="text-base leading-[28px] font-normal">
                Clients satisfaits
              </p>
            </div>
          </div>
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
      <div className="mt-10">
        <img src={blackCar} className="rounded-xl" alt="car image" />
        <div className="my-3 md:mt-6 md:mb-5 flex justify-between md:justify-center md:gap-x-6">
          <img
            src={wahsingCar1}
            className="rounded-[4px] w-[74px] md:w-[120px]"
            alt="car image"
          />
          <img
            src={insideCar1}
            className="rounded-[4px] w-[74px] md:w-[120px]"
            alt="car image"
          />
          <img
            src={wahsingCar2}
            className="rounded-[4px] w-[74px] md:w-[120px]"
            alt="car image"
          />
          <img
            src={insideCar2}
            className="rounded-[4px] w-[74px] md:w-[120px]"
            alt="car image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
