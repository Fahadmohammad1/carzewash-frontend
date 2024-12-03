import React from "react";
import service1 from "../../assets/service/service-1.png";

const Service = ({ service }) => {
  return (
    <div
      className={`px-[13px] py-[18px] rounded-[20px] shadow-md ${service.bgColor}`}
    >
      <img
        className="rounded-xl w-full mb-5"
        src={service.image}
        alt="car wash"
      />
      <div>
        <h3 className="text-[28px] leading-[40px] font-extrabold mb-2 text-cw-secondary">
          {service.title}
        </h3>
        <p className="text-base leading-6">{service.description}</p>
      </div>
    </div>
  );
};

export default Service;
