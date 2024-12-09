import React from "react";
import Packages from "../components/home/Packages";
import Review from "../components/home/Review";
import Benifits from "../components/home/Benifits";

const Pricing = () => {
  return (
    <div className="px-5 lg:px-[104px]">
      <Packages />
      <Review />
      <Benifits />
    </div>
  );
};

export default Pricing;
