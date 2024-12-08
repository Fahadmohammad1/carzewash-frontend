import React from "react";
import { GoArrowRight } from "react-icons/go";
import background from "../../assets/banner-bg.png";

const QualityBanner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-cw-secondary pt-[50px] pb-8 px-5 text-base-300 md:px-[74px] lg:mt-[124px] lg:rounded-[40px]"
    >
      <h1 className="font-black text-[28px] md:text-4xl leading-[42px] md:leading-[52px] text-white text-center md:px-20">
        <span>Parce que votre voiture</span>
        <br />
        <span className="lg:text-cw-primary">mérite un bain</span>
      </h1>
      <p className="text-center leading-6">
        Your car deserves the best care, and our car wash service is designed to
        provide a deep clean and complete care. With high-quality products, we
        guarantee that your car will be sparkling after every wash.
      </p>
      <div className="flex justify-center">
        <button className="px-[30px] py-[12px] bg-cw-primary mt-10 rounded-md flex items-center gap-x-[16px]">
          <span className="text-[18px] leading-[21px] text-white">
            Learn More
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
