import React from "react";
import blackCar from "../../assets/banner/black-car.png";
import blackCar3 from "../../assets/banner/black-car.jpeg";
import blackCar2 from "../../assets/banner/black-car2.png";
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
      <div className="lg:grid grid-cols-2 gap-x-5">
        <div>
          <h1 className="text-[30px] md:text-[52px] leading-[48px] md:leading-[68px] font-bold tracking-wide font-cw-primary">
            <span className="text-cw-primary">Nous aimons faire</span>{" "}
            <span className="text-cw-secondary">Briller votre voiture</span>
          </h1>
          <p className="text-base leading-[24px] mt-[12px]">
            Nous croyons que chaque voiture mérite de briller comme neuve. Avec
            notre expertise et des produits de qualité, nous assurons que votre
            véhicule retrouve son éclat d’origine à chaque lavage.
          </p>
          <div className="md:flex md:flex-row-reverse md:justify-end lg:flex-col-reverse justify-start">
            <div className="flex gap-x-[18px] mt-[32px] items-center md:ml-[122px] lg:ml-0 lg:mt-[48px]">
              <div className="flex">
                <img
                  src={avatar1}
                  className="size-[60px] rounded-full"
                  alt="avatar 1"
                />
                <img
                  src={avatar2}
                  className="size-[60px] rounded-full -ml-8"
                  alt="avatar 2"
                />
                <img
                  src={avatar3}
                  className="size-[60px] rounded-full -ml-8"
                  alt="avatar 3"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[28px] text-cw-primary leading-[28px] font-black">
                  100+
                </p>
                <p className="text-base leading-[28px] font-normal">
                  Clients satisfaits
                </p>
              </div>
            </div>
            <button className="px-[30px] py-[12px] bg-cw-primary mt-10 rounded-md flex items-center gap-x-[16px] lg:w-fit">
              <span className="text-[18px] leading-[21px] text-white">
                Learn More
              </span>
              <span className="bg-white rounded-full p-[7px]">
                <GoArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start mt-8 lg:mt-0">
          <div className="lg:flex gap-x-5">
            <div className="">
              <img
                src={blackCar3}
                className="rounded-xl h-full lg:w-[500px]"
                alt="black car"
              />
            </div>

            <div className="flex lg:flex-col gap-y-6 justify-between md:justify-center lg:justify-normal md:gap-x-6 mt-3 lg:mt-0 md:mt-6 ">
              <img
                src={wahsingCar1}
                className="rounded-[4px] w-[74px] md:w-[120px] lg:h-full"
                alt="washing car 1"
              />
              <img
                src={insideCar1}
                className="rounded-[4px] w-[74px] md:w-[120px] lg:h-full"
                alt="inside car 1"
              />
              <img
                src={wahsingCar2}
                className="rounded-[4px] w-[74px] md:w-[120px] lg:h-full"
                alt="washing car 2"
              />
              <img
                src={insideCar2}
                className="rounded-[4px] w-[74px] md:w-[120px] lg:h-full"
                alt="inside car 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
