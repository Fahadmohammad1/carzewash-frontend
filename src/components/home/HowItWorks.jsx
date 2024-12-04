import React from "react";
import date from "../../assets/howItWorks/date.png";
import car from "../../assets/howItWorks/car.png";
import delivery from "../../assets/howItWorks/delivery.png";

const HowItWorks = () => {
  const userGuides = [
    {
      id: 1,
      icon: date,
      title: "Réservations",
      description:
        "Planifiez facilement votre service en ligne ou par téléphone.",
    },
    {
      id: 2,
      icon: car,
      title: "Obtenez le service",
      description:
        "Nos experts interviennent pour prendre soin de votre véhicule.",
    },
    {
      id: 3,
      icon: delivery,
      title: "Arrivez et payez",
      description:
        "Une fois le service terminé, vous payez et repartez avec une voiture éclatante.",
    },
  ];
  return (
    <section className="mt-[60px]">
      <h1 className="font-black text-[28px] leading-[42px] text-center p-7">
        <span className="text-cw-secondary">Comment ça fonctionne pour</span>{" "}
        <span className="text-cw-primary">faire briller la voiture</span>
      </h1>
      <p className="text-center leading-6">
        Discover our simple and effective process to restore your car to its
        former glory.
      </p>
      {userGuides.map((guide) => (
        <div
          key={guide.id}
          className="card bg-base-100 w-full shadow-xl mt-8 px-6 py-8"
        >
          <div className="">
            <div className="bg-cw-primary p-[27px] rounded-full max-w-fit">
              <img src={guide.icon} alt="" />
            </div>
            <h2 className="font-black text-[28px] leading-[42px] mt-10 text-cw-primary">
              {guide.title}
            </h2>
            <p className="leading-6 text-base">{guide.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HowItWorks;
