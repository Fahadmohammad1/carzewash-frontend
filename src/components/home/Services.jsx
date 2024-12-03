import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <section className="mt-[60px]">
      <h1 className="text-[28px] leading-[42px] font-black text-center mb-3">
        <span className="text-cw-secondary">Apportant de l’éclat</span>{" "}
        <span className="text-cw-primary">pour votre voiture</span>
      </h1>
      <p className="text-base leading-6 text-center mb-12">
        Nous offrons des services de nettoyage et d’entretien conçus pour
        restaurer l’apparence et la propreté de votre véhicule, en mettant
        l’accent sur la qualité et la satisfaction du client.
      </p>

      <div>
        <Service />
      </div>
    </section>
  );
};

export default Services;
