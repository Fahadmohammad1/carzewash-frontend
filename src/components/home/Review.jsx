import React from "react";
import avatar from "../../assets/banner/avatar-3.png";
import icon from "../../assets/review-icon.png";

const Review = () => {
  return (
    <section className="mt-[60px]">
      <h1 className="text-[28px] md:text-4xl leading-[42px] md:leading-[52px] font-black text-center mb-3 md:px-28">
        <span className="text-cw-secondary">Avis Clients</span>
        <br />
        <span className="text-cw-primary">Vos avis prouvent</span>
      </h1>
      <p className="text-base leading-6 text-center mb-12 md:px-28">
        Découvrez ce que nos clients disent de nous et pourquoi ils nous font
        confiance pour le lavage de leur véhicule.
      </p>
      <div className="bg-cw-primary mt-8 px-[30px] pt-[38px] pb-12 flex flex-col items-center rounded-[20px]">
        <div className="mb-8">
          <p className="text-center text-white">
            Excellent service et résultats impeccables. Ma voiture brille comme
            jamais !
          </p>
          <img src={icon} alt="" />
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-center md:gap-x-4">
          <img
            className="rounded-full mb-3 md:mb-0"
            src={avatar}
            alt="avatar"
          />
          <h6 className="text-white text-[18px]">Jack Michael</h6>
          <p className="text-white md:hidden">Customer</p>
        </div>
      </div>
    </section>
  );
};

export default Review;
