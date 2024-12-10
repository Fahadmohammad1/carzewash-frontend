import React from "react";
import Pack from "./Pack";

const Packages = () => {
  const packages = [
    {
      id: 1,
      price: 50,
      title: "Formule Classique",
      type: "Forfait Argent",
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
      type: "Forfait Gold",
      details: [
        "Aspiration de l'habitacle, des tapis & du coffre en profondeur",
        "Entretien de tous les plastiques",
        "Nettoyage des sièges à l'injecteur/extracteur et/ou traitement cuir",
        "Désinfection des aérations à la machine vapeur",
        "Nettoyage des seuils et contours de portes",
        "Décrassage des tapis de sol",
        "Lustrage des plastiques",
        "Polishing plastics",
        "Nettoyage des vitres intérieures/extérieures",
        "Parfum d'ambiance",
      ],
    },
    {
      id: 3,
      price: 190,
      title: "Formule Prestige",
      type: "Forfait Platine",
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
    <section className="mt-[60px] pt-10">
      <h1 className="font-black text-[28px] md:text-4xl leading-[42px] md:leading-[52px] text-center md:px-10 lg:text-[52px] lg:leading-[80px] font-cw-primary">
        <span className="text-cw-secondary">Noo Tarifs & Formules</span>
        <br />
        <span className="text-cw-primary">Détaillements</span>
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
