import React from "react";
import avatar from "../../assets/banner/avatar-3.png";
import icon from "../../assets/review-icon.png";

const Review = () => {
  return (
    <section className="mt-[60px]">
      <h1 className="text-[28px] leading-[42px] font-black text-center mb-3">
        <span className="text-cw-secondary">Avis Clients</span>{" "}
        <span className="text-cw-primary">Vos avis prouvent</span>
      </h1>
      <p className="text-base leading-6 text-center mb-12">
        Découvrez ce que nos clients disent de nous et pourquoi ils nous font
        confiance pour le lavage de leur véhicule.
      </p>
      <div className="bg-cw-primary mt-8 px-[30px] pt-[38px] flex flex-col items-center">
        <div className="mb-8">
          <p className="text-center text-white">
            Excellent service et résultats impeccables. Ma voiture brille comme
            jamais !
          </p>
          <img src={icon} alt="" />
        </div>
        <img className="rounded-full mb-3" src={avatar} alt="avatar" />
        <h6 className="text-white text-[18px]">Jack Michael</h6>
        <p className="text-white">Customer</p>
      </div>
    </section>
  );
};

export default Review;
