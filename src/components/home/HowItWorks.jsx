import React from "react";
import date from "../../assets/howItWorks/date.png";
import car from "../../assets/howItWorks/car.png";
import delivery from "../../assets/howItWorks/delivery.png";
import Slider from "react-slick";

const HowItWorks = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

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
    <section className="mt-[60px] lg:mt-[120px]">
      <h1 className="font-black text-[28px] md:text-4xl leading-[42px] md:leading-[52px] text-center p-8 lg:p-0 md:px-20 lg:text-start lg:text-[52px] lg:leading-[80px] font-cw-primary tracking-wide">
        <span className="text-cw-secondary">Comment ça fonctionne pour</span>
        <br />
        <span className="text-cw-primary">faire briller la voiture</span>
      </h1>
      <p className="text-center leading-6 md:px-28 lg:text-start lg:px-0 tracking-wide font-cw-regular lg:w-[490px] opacity-70">
        Découvrez notre processus simple et efficace pour redonner à votre
        voiture tout son éclat.
      </p>
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 md:hidden">
        {userGuides.map((guide) => (
          <div
            style={{
              boxShadow: "0px 5px 30px 0px #3C98CC33",
            }}
            key={guide.id}
            className="card w-full shadow-xl mt-8 px-6 py-8"
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
      </div>

      <div className="slider-container hidden md:block lg:hidden">
        <Slider {...settings}>
          {userGuides.map((guide) => (
            <div key={guide.id} className="px-[10px] h-max pb-6">
              <div
                style={{ boxShadow: "0px 6px 20px 0px #00000026" }}
                className="card w-full mt-8 px-6 py-8 md:h-max md:px-4"
              >
                <div>
                  <div className="bg-cw-primary p-[27px] rounded-full max-w-fit">
                    <img src={guide.icon} alt="" />
                  </div>
                  <h2 className="font-black text-[28px] leading-[42px] mt-10 text-cw-primary">
                    {guide.title}
                  </h2>
                  <p className="leading-6 text-base">{guide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HowItWorks;
