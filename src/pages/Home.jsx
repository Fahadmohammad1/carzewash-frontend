import React, { useRef } from "react";
import Banner from "../components/home/Banner";
import BookingForm from "../components/home/BookingForm";
import Services from "../components/home/Services";
import Quality from "../components/home/Quality";
import QualityBanner from "../components/home/QualityBanner";
import HowItWorks from "../components/home/HowItWorks";
import Packages from "../components/home/Packages";
import Review from "../components/home/Review";
import Benifits from "../components/home/Benifits";

const Home = () => {
  const pricingRef = useRef(null);

  const handleScrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="px-5 md:px-10 lg:px-[104px]">
        <Banner handleScrollToPricing={handleScrollToPricing} />
        <BookingForm />
        <Services />
        <Quality />
      </div>
      <div className="lg:px-[104px]">
        <QualityBanner />
      </div>
      <div className="px-5 md:px-10 lg:px-[104px]">
        <HowItWorks />
        <Packages pricingRef={pricingRef} />
        <Review />
        <Benifits />
      </div>
    </>
  );
};

export default Home;
