import React from "react";
import { GoArrowRight } from "react-icons/go";

const QualityBanner = () => {
  return (
    <section className="bg-cw-secondary pt-[50px] pb-8 px-5 text-base-300 md:px-[74px]">
      <h1 className="font-black text-[28px] md:text-4xl leading-[42px] md:leading-[52px] text-white text-center md:px-20">
        Parce que votre voiture mérite un bain
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
          <span className="bg-white rounded-full p-[7px]">
            <GoArrowRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default QualityBanner;
