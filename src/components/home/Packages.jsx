import React from "react";
import arrow from "../../assets/right-arrow1.svg";
import arrow2 from "../../assets/right-arrow2.svg";
import { GoArrowRight } from "react-icons/go";

const Packages = () => {
  const packages = [
    {
      id: 1,
      price: 50,
      position: "",
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
      position: "middle",
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
      position: "",
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
        {packages.map((p) => (
          <div
            key={p.id}
            className={`card w-full shadow-xl mt-8 px-5 ${
              p.position === "middle" ? "bg-cw-primary" : ""
            }`}
          >
            <div className="">
              <h2
                className={`font-extrabold text-[32px] leading-[38px] mt-10 ${
                  p.position === "middle" ? "text-white" : "text-cw-secondary"
                }`}
              >
                {p.title}
              </h2>
              <p
                className={`leading-6 text-base opacity-50 ${
                  p.position === "middle" ? "text-white" : "text-cw-secondary"
                }`}
              >
                {p.type}
              </p>
              <p
                className={`mt-8 mb-16 text-[64px] leading-[68px] font-black ${
                  p.position === "middle" ? "text-white" : "text-cw-primary"
                }`}
              >
                €{p.price}
              </p>
            </div>
            <div className="flex flex-col gap-y-4 lg:mb-[60px]">
              {p.details.map((detail, i) => (
                <div key={i} className="flex gap-x-3 items-start">
                  <img
                    src={p.position === "middle" ? arrow2 : arrow}
                    className="mt-[4px] bg-transparent"
                    alt="right arrow"
                  />
                  <p
                    className={`flex items-start text-base leading-6 font-cw-regular ${
                      p.position === "middle"
                        ? "text-white"
                        : "text-cw-secondary opacity-60"
                    }`}
                  >
                    {detail}
                  </p>
                </div>
              ))}
            </div>
            <button
              className={`px-[30px] py-[12px] rounded-md flex justify-center items-center gap-x-[16px] mt-[60px] mb-5 lg:mt-auto ${
                p.position === "middle" ? "bg-white" : "bg-cw-primary"
              }`}
            >
              <span
                className={`text-[18px] leading-[21px] ${
                  p.position === "middle" ? "text-cw-primary" : "text-white"
                }`}
              >
                Get Package
              </span>
              <span
                className={`rounded-full p-[7px] ${
                  p.position === "middle" ? "bg-cw-primary" : "bg-white"
                }`}
              >
                <GoArrowRight />
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
