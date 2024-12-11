import React from "react";
import blackCar3 from "../../assets/banner/black-car.jpeg";
import wahsingCar1 from "../../assets/banner/washing-car-1.png";
import insideCar1 from "../../assets/banner/inside-car-1.png";
import wahsingCar2 from "../../assets/banner/washing-car-2.png";
import insideCar2 from "../../assets/banner/inside-car-2.png";
import avatar1 from "../../assets/banner/avatar-1.png";
import avatar2 from "../../assets/banner/avatar-2.png";
import avatar3 from "../../assets/banner/avatar-3.png";
import { GoArrowRight } from "react-icons/go";
import topBackground from "../../assets/banner/top-bg.jpg";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();
  const variants2 = {
    hidden: { y: -25, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <section style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${topBackground})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: "8%",
          zIndex: -1,
        }}
      ></div>
      <div className="lg:grid grid-cols-2 gap-x-5 relative z-10">
        <div>
          <motion.h1
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            variants={{ hidden: { width: 0 }, visible: { width: "100%" } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-[30px] md:text-[52px] leading-[48px] md:leading-[68px] font-bold tracking-wide font-cw-primary"
          >
            <span className="text-cw-primary">Nous aimons faire</span>
            <br />
            <span className="text-cw-secondary">Briller votre voiture</span>
          </motion.h1>
          <motion.p
            variants={variants2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-base leading-[24px] mt-[12px]"
          >
            Nous croyons que chaque voiture mérite de briller comme neuve. Avec
            notre expertise et des produits de qualité, nous assurons que votre
            véhicule retrouve son éclat d’origine à chaque lavage.
          </motion.p>
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
            <button
              onClick={() => navigate("/pricing")}
              className="px-[30px] py-[12px] bg-cw-primary mt-10 rounded-md flex items-center gap-x-[16px] lg:w-fit transform hover:scale-110 transition duration-150 ease-in-out"
            >
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
