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
    <section className="mt-[60px]">
      <h1 className="text-[30px] leading-[42px] font-black text-center">
        <span className="text-cw-secondary">
          Dites adieu aux saletés, bonjour à la
        </span>{" "}
        <span className="text-cw-primary">propreté!</span>
      </h1>
      <div>
        {benifits.map((b) => (
          <div
            key={b.id}
            className="mt-8 px-[60px] py-8 shadow rounded-[10px] mb-10"
          >
            <img className="mx-auto" src={b.icon} alt="icon" />
            <h4 className="text-cw-secondary font-bold text-[32px] leading-[44px] mt-5 text-center">
              {b.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benifits;