import React from "react";
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
  return (
    <>
      <div className="px-5 md:px-10">
        <Banner />
        <BookingForm />
        <Services />
        <Quality />
      </div>
      <QualityBanner />
      <div className="px-5 md:px-10">
        <HowItWorks />
        <Packages />
        <Review />
        <Benifits />
      </div>
    </>
  );
};

export default Home;
