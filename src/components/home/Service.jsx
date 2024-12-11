import React from "react";
import { motion } from "motion/react";

const Service = ({ service }) => {
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    },
  };
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      style={{ boxShadow: "0px 10px 20px 0px #3C98CC26" }}
      className="px-[13px] py-[18px] rounded-[20px] shadow-md bg-white hover:bg-cw-primary md:max-w-[384px] md:mx-5 lg:mx-0 group"
    >
      <img
        className="rounded-xl w-full mb-5 md:[352px]"
        src={service.image}
        alt="car wash"
      />
      <div>
        <h3 className="text-[28px] leading-[40px] font-extrabold mb-2 text-cw-secondary group-hover:text-white">
          {service.title}
        </h3>
        <p className="text-base leading-6 group-hover:text-white">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Service;
