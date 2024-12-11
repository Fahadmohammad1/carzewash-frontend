import React from "react";
import avatar from "../../assets/banner/avatar-3.png";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router";

const Review = () => {
  const navigate = useNavigate();
  return (
    <section className="mt-[60px] lg:mt-[120px]">
      <div className="lg:flex lg:items-center">
        <div>
          <h1 className="text-[28px] md:text-4xl leading-[42px] md:leading-[52px] font-black text-center mb-3 md:px-28 lg:text-start lg:px-0">
            <span className="text-cw-secondary">Avis Clients</span>
            <br />
            <span className="text-cw-primary">Vos avis prouvent</span>
          </h1>
          <p className="text-base leading-6 text-center mb-12 md:px-28 lg:pr-20 lg:pl-0 lg:text-start">
            Découvrez ce que nos clients disent de nous et pourquoi ils nous
            font confiance pour le lavage de leur véhicule.
          </p>
          <button
            onClick={() => navigate("/pricing")}
            className="px-[30px] py-[12px] bg-cw-primary mt-10 rounded-md lg:flex items-center gap-x-[16px] hidden transform hover:scale-110 transition duration-150 ease-in-out"
          >
            <span className="text-[18px] leading-[21px] text-white">
              Learn More
            </span>
            <span className="bg-white rounded-full p-[7px]">
              <GoArrowRight />
            </span>
          </button>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="bg-cw-primary mt-8 lg:mt-0 px-[30px] pt-[38px] pb-12 flex flex-col items-center lg:items-start rounded-[20px] lg:min-h-max"
        >
          <div className="mb-8 lg:h-full">
            <p className="text-center text-white">
              Excellent service et résultats impeccables. Ma voiture brille
              comme jamais !
            </p>
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
      </div>
    </section>
  );
};

export default Review;
