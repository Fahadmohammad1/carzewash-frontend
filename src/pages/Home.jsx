import React from "react";
import Banner from "../components/home/Banner";
import BookingForm from "../components/home/BookingForm";
import Services from "../components/home/Services";
import Quality from "../components/home/Quality";
import QualityBanner from "../components/home/QualityBanner";
import HowItWorks from "../components/home/HowItWorks";
import Packages from "../components/home/Packages";

const Home = () => {
  return (
    <>
      <Banner />
      <BookingForm />
      <Services />
      <Quality />
      <QualityBanner />
      <HowItWorks />
      <Packages />
    </>
  );
};

export default Home;
