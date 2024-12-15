import React, { useState } from "react";
import blackCar3 from "../../assets/banner/black-car.jpeg";
import wahsingCar1 from "../../assets/banner/washing-car-1.jpg";
import insideCar1 from "../../assets/banner/inside-car-1.jpg";
import wahsingCar2 from "../../assets/banner/washing-car-2.jpg";
import insideCar2 from "../../assets/banner/inside-car-2.jpg";
import avatar1 from "../../assets/banner/avatar-1.png";
import avatar2 from "../../assets/banner/avatar-2.png";
import avatar3 from "../../assets/banner/avatar-3.png";
import { GoArrowRight } from "react-icons/go";
import topBackground from "../../assets/banner/top-bg.jpg";
import { motion } from "motion/react";

const Banner = ({ handleScrollToPricing }) => {
  const [mainImage, setMainImage] = useState({
    src: blackCar3,
    alt: "black car",
  });

  const [smallImages, setSmallImages] = useState([
    { src: wahsingCar1, alt: "washing car 1" },
    { src: insideCar1, alt: "inside car 1" },
    { src: wahsingCar2, alt: "washing car 2" },
    { src: insideCar2, alt: "inside car 2" },
  ]);

  const handleImageClick = (clickedImage, index) => {
    const newMainImage = { ...mainImage };
    setMainImage(clickedImage);

    const updatedSmallImages = [...smallImages];
    updatedSmallImages[index] = newMainImage;
    setSmallImages(updatedSmallImages);
  };

  const variants2 = {
    hidden: { y: -25, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <section style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${topBackground})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: "8%",
          zIndex: -1,
        }}
      ></div>
      <div className="lg:grid grid-cols-2 gap-x-5 relative z-10">
        <div>
          <motion.h1
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            variants={{ hidden: { width: 0 }, visible: { width: "100%" } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className=""
          >
            <span className="text-cw-primary text-[24px] md:text-[44px] leading-[48px] md:leading-[68px] font-bold tracking-wide font-cw-primary">
              L’art de sublimer votre
            </span>
            <br />
            <span className="text-cw-secondary text-[24px] md:text-[42px] leading-[48px] md:leading-[68px] font-bold tracking-wide font-cw-primary">
              voiture commence ici
            </span>
          </motion.h1>
          <motion.p
            variants={variants2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-base leading-[24px] mt-[12px] hyphens-auto"
          >
            Votre voiture mérite le meilleur, et vous aussi ! Grâce à notre
            service de nettoyage automobile à domicile sur Ajaccio, bénéficiez
            d'un véhicule impeccablement propre sans avoir à vous déplacer. Un
            service sur mesure, pensé pour votre confort et votre satisfaction.
          </motion.p>
          <div className="md:flex md:flex-row-reverse md:justify-end lg:flex-col-reverse justify-start">
            <div className="flex gap-x-[18px] mt-[32px] items-center md:ml-[122px] lg:ml-0 lg:mt-[48px]">
              <div className="flex">
                <img
                  src={avatar1}
                  className="size-[60px] rounded-full"
                  alt="avatar 1"
                />
                <img
                  src={avatar2}
                  className="size-[60px] rounded-full -ml-8"
                  alt="avatar 2"
                />
                <img
                  src={avatar3}
                  className="size-[60px] rounded-full -ml-8"
                  alt="avatar 3"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[28px] text-cw-primary leading-[28px] font-black">
                  100+
                </p>
                <p className="text-base leading-[28px] font-normal">
                  Clients satisfaits
                </p>
              </div>
            </div>
            <button
              onClick={handleScrollToPricing}
              className="px-[30px] py-[12px] bg-cw-primary mt-10 rounded-md flex items-center gap-x-[16px] lg:w-fit transform hover:scale-110 transition duration-150 ease-in-out"
            >
              <span className="text-[18px] leading-[21px] text-white">
                en savoir plus
              </span>
              <span className="bg-white rounded-full p-[7px]">
                <GoArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start mt-8 lg:mt-0">
          <div className="lg:flex flex-col gap-y-5">
            <div>
              <img
                src={mainImage.src}
                className="rounded-xl lg:w-full lg:h-min"
                alt={mainImage.alt}
              />
            </div>

            <div className="flex gap-y-6 justify-between md:justify-center lg:justify-normal md:gap-x-[16px] mt-3 lg:mt-0 md:mt-6 lg:w-full">
              {smallImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  className="rounded-[4px] w-[74px] md:w-[120px] mx-auto cursor-pointer hover:border-2 border-cw-primary lg:h-[80px]"
                  alt={image.alt}
                  onClick={() => handleImageClick(image, index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
