import React from "react";
import Pack from "./Pack";

const Packages = ({ pricingRef }) => {
  const packages = [
    {
      id: 1,
      price: 50,
      title: "Formule Classique",
      type: "à partir de",
      details: [
        "Aspiration de l'habitacle, des tapis & du coffre",
        "Entretien de tous les plastiques",
        "Nettoyage des seuils de portes",
        "Nettoyage des vitres intérieures",
        "Parfum d'ambiance",
      ],
    },
    {
      id: 2,
      price: 90,
      title: "Formule Premium",
      type: "à partir de",
      details: [
        "Aspiration de l'habitacle, des tapis & du coffre en profondeur",
        "Entretien de tous les plastiques",
        "Nettoyage des sièges à l'injecteur/extracteur et/ou traitement cuir",
        "Désinfection des aérations à la machine vapeur",
        "Nettoyage des seuils et contours de portes",
        "Décrassage des tapis de sol",
        "Lustrage des plastiques",
        "Nettoyage des vitres intérieures/extérieures",
        "Parfum d'ambiance",
      ],
    },
    {
      id: 3,
      price: 150,
      title: "Formule Prestige",
      type: "à partir de",
      details: [
        "Aspiration de l'habitacle, des tapis & du coffre en profondeur",
        "Entretien de tous les plastiques",
        "Nettoyage des sièges à l'injecteur/extracteur et/ou traitement cuir",
        "Décrassage de l'habitacle & décrassage du coffre",
        "Nettoyage du ciel de toit",
        "Désinfection des aérations à la machine vapeur",
        "Nettoyage des seuils et contours de portes",
        "Décrassage des tapis de sol",
        "Lustrage des plastiques",
        "Traitement anti-odeur",
        "Nettoyage des vitres intérieures/extérieures",
        "Parfum d'ambiance",
      ],
    },
  ];
  return (
    <section ref={pricingRef} className="mt-[60px] lg:mt-[80px] pt-10">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="font-black text-[28px] md:text-4xl leading-[42px] md:leading-[52px] text-center md:px-10 lg:text-[52px] lg:leading-[80px] font-cw-primary"
      >
        <span className="text-cw-secondary">Nos Tarifs &</span>
        <br />
        <span className="text-cw-primary">Formules</span>
      </h1>
      <div className="grid grid-cols-1 mt-8 lg:grid-cols-3 lg:gap-x-10">
        {packages?.map((p) => (
          <Pack key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
};

export default Packages;
