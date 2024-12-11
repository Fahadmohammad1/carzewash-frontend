import React from "react";
import Service from "./Service";
import service1 from "../../assets/service/service-1.png";
import service2 from "../../assets/service/service-2.png";
import service3 from "../../assets/service/service-3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react";

const Services = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const services = [
    {
      id: 1,
      image: service1,
      title: "Services Professionnels",
      description:
        "Notre équipe expérimentée utilise des techniques avancées pour un nettoyage méticuleux.",
    },
    {
      id: 2,
      image: service2,
      title: "Équipements haut de gamme",
      description:
        "Nous utilisons les meilleurs outils pour garantir un lavage impeccable et sécurisé.",
    },
    {
      id: 3,
      image: service3,
      title: "Tarifs Compétitifs",
      description:
        "Des services de qualité à des prix abordables pour tous nos clients.",
    },
  ];

  const variants2 = {
    hidden: { y: -25, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="mt-[60px] md:mt-[120px]">
      <motion.h1
        variants={variants2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="text-[28px] leading-[42px] md:text-4xl lg:text-[52px] md:leading-[52px] lg:leading-[66px] lg:tracking-wide font-black text-center mb-3 md:px-[155px] lg:font-cw-primary"
      >
        <span className="text-cw-secondary">Apportant de l’éclat</span>
        <br />
        <span className="text-cw-primary">pour votre voiture</span>
      </motion.h1>
      <p className="text-base leading-6 text-center mb-12 md:px-20 lg:px-60">
        Nous offrons des services de nettoyage et d’entretien conçus pour
        restaurer l’apparence et la propreté de votre véhicule, en mettant
        l’accent sur la qualité et la satisfaction du client.
      </p>
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 lg:gap-x-10 gap-y-8 md:hidden">
        {services?.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
      <div className="slider-container hidden md:block lg:hidden">
        <Slider {...settings}>
          {services?.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
