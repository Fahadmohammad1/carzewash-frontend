import React from "react";
import { GoArrowRight } from "react-icons/go";
import background from "../../assets/banner-bg.png";
import { useNavigate } from "react-router";

const QualityBanner = () => {
  const navigate = useNavigate();
  return (
    <section
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-cw-secondary pt-[50px] pb-8 px-5 text-base-300 md:px-[74px] lg:mt-[124px] lg:rounded-[40px] mt-[26px] md:mt-[120px]"
    >
      <h1 className="font-black text-[28px] md:text-4xl leading-[42px] md:leading-[52px] text-white text-center md:px-20 tracking-wide">
        <span>Parce que votre voiture</span>
        <br />
        <span className="md:text-cw-primary">mérite un bain</span>
      </h1>
      <p className="text-center leading-6 lg:px-[230px] tracking-wide font-cw-regular opacity-70 mt-3">
        Votre voiture mérite les meilleurs soins et notre service de lavage de
        voiture est conçu pour fournir un nettoyage en profondeur et un
        entretien complet. Avec des produits de haute qualité, nous garantissons
        que votre voiture sera étincelante après chaque lavage.
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/pricing")}
          className="px-[30px] py-[12px] bg-cw-primary mt-10 rounded-md flex items-center gap-x-[16px] transform hover:scale-110 transition duration-150 ease-in-out"
        >
          <span className="text-[18px] leading-[21px] text-white">
            en savoir plus
          </span>
          <span className="bg-white rounded-full p-[7px] text-cw-secondary">
            <GoArrowRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default QualityBanner;
