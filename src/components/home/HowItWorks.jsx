import React from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

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
      icon: (
        <svg
          width="54"
          height="58"
          viewBox="0 0 54 58"
          fill="none"
          className="stroke-white group-hover:stroke-cw-secondary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="elements">
            <path
              id="Vector"
              d="M42.9969 2.33325V7.66659M10.9969 2.33325V7.66659"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M26.985 31.6665H27.009M26.985 42.3332H27.009M37.6397 31.6665H37.6637M16.3303 31.6665H16.3542M16.3303 42.3332H16.3542"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector 4046"
              d="M4.33032 18.3333H49.6637"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M1.66364 29.6486C1.66364 18.0292 1.66364 12.2194 5.00262 8.60971C8.3416 5 13.7156 5 24.4636 5H29.5303C40.2783 5 45.6523 5 48.9913 8.60971C52.3303 12.2194 52.3303 18.0292 52.3303 29.6486V31.018C52.3303 42.6375 52.3303 48.4472 48.9913 52.057C45.6523 55.6667 40.2783 55.6667 29.5303 55.6667H24.4636C13.7156 55.6667 8.3416 55.6667 5.00262 52.057C1.66364 48.4472 1.66364 42.6375 1.66364 31.018V29.6486Z"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector 4049"
              d="M2.99695 18.3333H50.9969"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      ),
      title: "Réservations",
      description:
        "Planifiez facilement votre service en ligne ou par téléphone.",
    },
    {
      id: 2,
      icon: (
        <svg
          width="57"
          height="52"
          viewBox="0 0 57 52"
          fill="none"
          className="stroke-white group-hover:stroke-cw-secondary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="elements">
            <path
              id="Vector 6095"
              d="M2.99998 26L8.33332 28.6667"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector 6096"
              d="M53.6666 27.3333L48.3333 28.6666"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector"
              d="M17.6666 40.6667L18.3218 39.0289C19.296 36.5933 19.7831 35.3755 20.7989 34.6877C21.8147 34 23.1263 34 25.7496 34H30.9171C33.5403 34 34.8519 34 35.8677 34.6877C36.8835 35.3755 37.3706 36.5933 38.3449 39.0289L39 40.6667"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M1.66665 39.3333V47.0185C1.66665 48.0286 2.30866 48.9519 3.32501 49.4036C3.98447 49.6967 4.61434 49.9999 5.37485 49.9999H9.95844C10.719 49.9999 11.3488 49.6967 12.0083 49.4036C13.0246 48.9519 13.6666 48.0286 13.6666 47.0185V41.9999"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M43 41.9999V47.0185C43 48.0286 43.642 48.9519 44.6583 49.4036C45.3178 49.6967 45.9477 49.9999 46.7082 49.9999H51.2918C52.0523 49.9999 52.6822 49.6967 53.3416 49.4036C54.358 48.9519 55 48.0286 55 47.0185V39.3333"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector 6097"
              d="M49.6666 16.6666L52.3333 15.3333"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector 6098"
              d="M6.99998 16.6666L4.33332 15.3333"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_4"
              d="M8.33331 18L11.2355 9.29357C12.4088 5.77347 12.9955 4.01342 14.3922 3.00671C15.789 2 17.6442 2 21.3547 2H35.3119C39.0224 2 40.8777 2 42.2744 3.00671C43.6711 4.01342 44.2578 5.77347 45.4312 9.29357L48.3333 18"
              stroke-width="3"
              stroke-linejoin="round"
            />
            <path
              id="Vector_5"
              d="M8.33332 18H48.3333C50.8859 20.7027 55 24.4665 55 28.6656V37.9205C55 39.4417 53.9879 40.7222 52.6449 40.8999L44.3333 42H12.3333L4.02174 40.8999C2.67877 40.7222 1.66665 39.4417 1.66665 37.9205V28.6656C1.66665 24.4665 5.78074 20.7027 8.33332 18Z"
              stroke-width="3"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      ),
      title: "Obtenez le service",
      description:
        "Nos experts interviennent pour prendre soin de votre véhicule.",
    },
    {
      id: 3,
      icon: (
        <svg
          width="57"
          height="58"
          viewBox="0 0 57 58"
          fill="none"
          className="stroke-white group-hover:stroke-cw-secondary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="elements">
            <path
              id="Vector"
              d="M31.8114 38.8655C31.2256 39.4512 31.2256 40.401 31.8114 40.9868C32.3972 41.5726 33.3469 41.5726 33.9327 40.9868L31.8114 38.8655ZM36.4541 38.4653C37.0399 37.8796 37.0399 36.9298 36.4541 36.344C35.8684 35.7582 34.9186 35.7582 34.3328 36.344L36.4541 38.4653ZM39.3757 31.3011C38.7899 31.8869 38.7899 32.8367 39.3757 33.4225C39.9615 34.0082 40.9112 34.0082 41.497 33.4225L39.3757 31.3011ZM47.3804 27.5391C47.9662 26.9533 47.9662 26.0036 47.3804 25.4178C46.7946 24.832 45.8448 24.832 45.259 25.4178L47.3804 27.5391ZM4.91604 38.8655C4.33025 39.4512 4.33025 40.401 4.91604 40.9868C5.50183 41.5726 6.45157 41.5726 7.03736 40.9868L4.91604 38.8655ZM26.281 55.5927L26.106 54.1029L26.281 55.5927ZM24.4219 55.649L24.5078 54.1515L24.4219 55.649ZM55.319 24.752L53.8214 24.8379L55.319 24.752ZM55.2626 26.611L53.7729 26.436L55.2626 26.611ZM17.4465 12.5967L16.3859 11.536L17.4465 12.5967ZM31.0583 2.40666L31.2333 3.89641L31.0583 2.40666ZM32.9173 2.35032L32.8314 3.84786L32.9173 2.35032ZM12.2666 17.7766L13.3273 18.8372L12.2666 17.7766ZM2.07661 31.3883L3.56636 31.5633L2.07661 31.3883ZM2.02027 33.2474L3.51781 33.1615L2.02027 33.2474ZM33.9327 40.9868L36.4541 38.4653L34.3328 36.344L31.8114 38.8655L33.9327 40.9868ZM41.497 33.4225L47.3804 27.5391L45.259 25.4178L39.3757 31.3011L41.497 33.4225ZM7.03736 40.9868L40.6565 7.3676L38.5352 5.24628L4.91604 38.8655L7.03736 40.9868ZM13.3273 18.8372L18.5072 13.6573L16.3859 11.536L11.206 16.7159L13.3273 18.8372ZM44.012 39.1621L38.8321 44.342L40.9534 46.4633L46.1333 41.2834L44.012 39.1621ZM38.8321 44.342C35.5623 47.6118 33.1977 49.9733 31.1723 51.5875C29.1686 53.1845 27.6496 53.9216 26.106 54.1029L26.456 57.0825C28.7896 56.8083 30.8316 55.6953 33.0421 53.9335C35.2309 52.1891 37.7335 49.6833 40.9534 46.4633L38.8321 44.342ZM10.3426 47.3267C13.3686 50.3526 15.7366 52.7247 17.8389 54.3514C19.9742 56.0037 21.9883 57.012 24.3361 57.1466L24.5078 54.1515C22.9988 54.065 21.5576 53.4357 19.6748 51.9788C17.7589 50.4962 15.546 48.2873 12.464 45.2053L10.3426 47.3267ZM26.106 54.1029C25.5715 54.1657 25.0367 54.1818 24.5078 54.1515L24.3361 57.1466C25.0409 57.187 25.7502 57.1654 26.456 57.0825L26.106 54.1029ZM44.8753 12.794C47.9573 15.876 50.1662 18.0889 51.6487 20.0048C53.1056 21.8877 53.7349 23.3289 53.8214 24.8379L56.8165 24.6661C56.6819 22.3184 55.6736 20.3042 54.0213 18.1689C52.3946 16.0667 50.0225 13.6986 46.9966 10.6727L44.8753 12.794ZM46.1333 41.2834C49.3532 38.0635 51.859 35.5609 53.6035 33.3721C55.3652 31.1617 56.4783 29.1196 56.7524 26.7861L53.7729 26.436C53.5915 27.9797 52.8544 29.4987 51.2574 31.5023C49.6432 33.5277 47.2817 35.8924 44.012 39.1621L46.1333 41.2834ZM53.8214 24.8379C53.8518 25.3668 53.8357 25.9015 53.7729 26.436L56.7524 26.7861C56.8353 26.0803 56.8569 25.3709 56.8165 24.6661L53.8214 24.8379ZM18.5072 13.6573C21.7769 10.3876 24.1416 8.02611 26.167 6.41186C28.1707 4.8149 29.6896 4.07776 31.2333 3.89641L30.8833 0.916901C28.5497 1.19105 26.5076 2.30408 24.2972 4.06583C22.1084 5.8103 19.6058 8.31607 16.3859 11.536L18.5072 13.6573ZM46.9966 10.6727C43.9707 7.64676 41.6026 5.2747 39.5004 3.64798C37.3651 1.99566 35.3509 0.987394 33.0032 0.852779L32.8314 3.84786C34.3404 3.93438 35.7816 4.56366 37.6645 6.0206C39.5804 7.50313 41.7933 9.71202 44.8753 12.794L46.9966 10.6727ZM31.2333 3.89641C31.7678 3.83362 32.3025 3.81753 32.8314 3.84786L33.0032 0.852779C32.2984 0.812367 31.589 0.833985 30.8833 0.916901L31.2333 3.89641ZM11.206 16.7159C7.98602 19.9359 5.48025 22.4384 3.73578 24.6272C1.97403 26.8377 0.860999 28.8797 0.586852 31.2133L3.56636 31.5633C3.74771 30.0197 4.48485 28.5007 6.08181 26.497C7.69606 24.4716 10.0575 22.107 13.3273 18.8372L11.206 16.7159ZM12.464 45.2053C9.38197 42.1233 7.17308 39.9104 5.69055 37.9945C4.23362 36.1117 3.60433 34.6705 3.51781 33.1615L0.522732 33.3332C0.657347 35.681 1.66561 37.6951 3.31793 39.8305C4.94465 41.9327 7.31671 44.3007 10.3426 47.3267L12.464 45.2053ZM0.586852 31.2133C0.503936 31.9191 0.48232 32.6284 0.522732 33.3332L3.51781 33.1615C3.48749 32.6326 3.50357 32.0978 3.56636 31.5633L0.586852 31.2133Z"
            />
            <path
              id="Vector 4526"
              d="M7.33633 55.6667H50.003"
              stroke-width="3"
              stroke-linecap="round"
            />
          </g>
        </svg>
      ),
      title: "Arrivez et payez",
      description:
        "Une fois le service terminé, vous payez et repartez avec une voiture éclatante.",
    },
  ];

  return (
    <section className="mt-[60px] lg:mt-[120px]">
      <h1
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="font-black text-[28px] md:text-4xl leading-[42px] md:leading-[52px] text-center p-8 lg:p-0 md:px-20 lg:text-start lg:text-[52px] lg:leading-[80px] font-cw-primary tracking-wide"
      >
        <span className="text-cw-secondary text-wrap lg:text-nowrap">
          Comment ça fonctionne pour
        </span>
        <br />
        <span className="text-cw-primary text-wrap lg:text-nowrap">
          faire briller la voiture
        </span>
      </h1>
      <p className="text-center leading-6 md:px-28 lg:text-start lg:px-0 tracking-wide font-cw-regular lg:w-[490px] opacity-70">
        Découvrez notre processus simple et efficace pour redonner à votre
        voiture tout son éclat.
      </p>
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 md:hidden">
        {userGuides.map((guide) => (
          <div
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            data-aos-easing="linear"
            style={{
              boxShadow: "0px 5px 30px 0px #3C98CC33",
            }}
            key={guide.id}
            className="card w-full shadow-xl mt-8 px-6 py-8 group hover:bg-cw-primary"
          >
            <div className="">
              <div className="bg-cw-primary p-[27px] rounded-full max-w-fit group-hover:bg-white">
                {guide.icon}
              </div>
              <h2 className="font-black text-[28px] leading-[42px] mt-10 text-cw-primary group-hover:text-white">
                {guide.title}
              </h2>
              <p className="leading-6 text-base group-hover:text-white">
                {guide.description}
              </p>
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
