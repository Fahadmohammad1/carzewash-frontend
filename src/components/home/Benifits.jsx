import React from "react";
import crown from "../../assets/benifits/crown.png";
import smiley from "../../assets/benifits/smiley.png";
import clock from "../../assets/benifits/clock.png";
import location from "../../assets/benifits/location.png";

const Benifits = () => {
  const benifits = [
    {
      id: 1,
      icon: crown,
      title: "Qualité Garantie",
    },
    {
      id: 2,
      icon: smiley,
      title: "Satisfaction Client",
    },
    {
      id: 3,
      icon: clock,
      title: "Assistance 24h/24 et 7j/7",
    },
    {
      id: 4,
      icon: location,
      title: "Ajaccio Et Ses Alentours",
    },
  ];
  return (
    <section className="mt-[60px] lg:mt-[120px]">
      <h1 className="text-[30px] leading-[42px] font-black text-center md:hidden mb-8">
        <span className="text-cw-secondary">
          Dites adieu aux saletés, bonjour à la
        </span>{" "}
        <span className="text-cw-primary">propreté!</span>
      </h1>
      <h1 className="text-[36px] leading-[52px] font-black text-center hidden md:block lg:text-[52px] lg:leading-[68px] font-cw-primary">
        <span className="text-cw-secondary">Dites adieu aux saletés,</span>
        <br />
        <span className="text-cw-primary"> bonjour à la propreté!</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4 lg:gap-x-5">
        {benifits.map((b) => (
          <div
            style={{ boxShadow: "0px 5px 30px 0px #3C98CC33" }}
            key={b.id}
            className="mt-8 px-[60px] lg:px-9 py-8 shadow rounded-[10px] mb-10"
          >
            <img className="mx-auto lg:mx-0" src={b.icon} alt="icon" />
            <h4 className="text-cw-secondary font-bold text-[32px] leading-[44px] mt-5 text-center lg:text-start px-2 lg:px-0 font-cw-regular">
              {b.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benifits;
