import React from "react";
import Service from "./Service";
import service1 from "../../assets/service/service-1.png";
import service2 from "../../assets/service/service-2.png";
import service3 from "../../assets/service/service-3.png";

const Services = () => {
  const services = [
    {
      id: 1,
      image: service1,
      bgColor: "bg-white",
      title: "Services Professionnels",
      description:
        "Notre équipe expérimentée utilise des techniques avancées pour un nettoyage méticuleux.",
    },
    {
      id: 2,
      image: service2,
      bgColor: "bg-cw-primary",
      title: "Équipements haut de gamme",
      description:
        "Nous utilisons les meilleurs outils pour garantir un lavage impeccable et sécurisé.",
    },
    {
      id: 3,
      image: service3,
      bgColor: "bg-white",
      title: "Tarifs Compétitifs",
      description:
        "Des services de qualité à des prix abordables pour tous nos clients.",
    },
  ];
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

      <div className="grid grid-cols-1 gap-y-8">
        {services?.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
