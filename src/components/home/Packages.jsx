import React from "react";
import { RiContractRightLine } from "react-icons/ri";
import arrow from "../../assets/arrow.png";
import { GoArrowRight } from "react-icons/go";

const Packages = () => {
  const packages = [
    {
      id: 1,
      price: 50,
      bgColor: "bg-white",
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
      bgColor: "bg-white",
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
      bgColor: "bg-white",
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
      <h1 className="font-black text-[28px] md:text-4xl leading-[42px] md:leading-[52px] text-center md:px-10">
        <span className="text-cw-secondary">Noo Tarifs & Formules</span>{" "}
        <span className="text-cw-primary">Détaillements</span>
      </h1>
      <div className="grid grid-cols-1 mt-8">
        {packages.map((p) => (
          <div
            key={p.id}
            className="card bg-base-100 w-full shadow-xl mt-8 px-5"
          >
            <div className="">
              <h2 className="font-extrabold text-[32px] leading-[38px] mt-10 text-cw-secondary">
                {p.title}
              </h2>
              <p className="leading-6 text-base text-gray-500">{p.type}</p>
              <p className="mt-8 mb-16 text-[64px] leading-[68px] font-black">
                €{p.price}
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              {p.details.map((detail, i) => (
                <div className="flex gap-x-3 text-gray-400">
                  <img
                    src={arrow}
                    className="max-h-fit mt-[5px]"
                    alt="right arrow"
                  />
                  <p className="flex items-start text-base leading-6">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
            <button className="px-[30px] py-[12px] bg-cw-primary rounded-md flex justify-center items-center gap-x-[16px] mt-[60px] mb-5">
              <span className="text-[18px] leading-[21px] text-white">
                Get Package
              </span>
              <span className="bg-white rounded-full p-[7px]">
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
