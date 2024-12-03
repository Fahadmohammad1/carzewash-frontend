import React from "react";
import service1 from "../../assets/service/service-1.png";

const Service = () => {
  return (
    <div className="px-[13px] py-[18px] rounded-[20px] shadow-md">
      <img className="rounded-xl w-full mb-5" src={service1} alt="car wash" />
      <div>
        <h3 className="text-[28px] leading-[40px] font-extrabold mb-2 text-cw-secondary">
          Services Professionnels
        </h3>
        <p className="text-base leading-6">
          Notre équipe expérimentée utilise des techniques avancées pour un
          nettoyage méticuleux.
        </p>
      </div>
    </div>
  );
};

export default Service;
