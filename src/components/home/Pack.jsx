import React from "react";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { LuArrowRightToLine } from "react-icons/lu";

const Pack = ({ p }) => {
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    },
  };
  const navigate = useNavigate();
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      style={{ boxShadow: "0px 5px 30px 0px #3C98CC33" }}
      className="card w-full shadow-xl mt-8 px-5 hover:bg-cw-primary group"
    >
      <div>
        <h3 className="font-extrabold text-[32px] leading-[38px] mt-10 text-cw-secondary group-hover:text-white">
          {p.title}
        </h3>
        <p className="leading-6 text-base opacity-50">{p.type}</p>
        <p className="mt-8 mb-16 text-[64px] leading-[68px] font-black text-cw-primary group-hover:text-white">
          €{p.price}
        </p>
      </div>
      <div className="flex flex-col gap-y-4 lg:mb-[60px]">
        {p.details.map((detail, i) => (
          <div key={i} className="flex gap-x-3 items-start">
            <LuArrowRightToLine className="mt-[4px] min-w-4 opacity-70 group-hover:text-white" />
            <p className="flex items-start text-base leading-6 font-cw-regular text-cw-secondary opacity-70 group-hover:text-white">
              {detail}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/booking")}
        className="px-[30px] py-[12px] rounded-md flex justify-center items-center gap-x-[16px] mt-[60px] mb-5 lg:mt-auto group-hover:bg-white bg-cw-primary"
      >
        <span className="text-[18px] leading-[21px] text-white group-hover:text-cw-primary">
          Réserver la Formule
        </span>
        <span className="rounded-full p-[7px] group-hover:text-white bg-white group-hover:bg-cw-primary">
          <GoArrowRight />
        </span>
      </button>
    </motion.div>
  );
};

export default Pack;
