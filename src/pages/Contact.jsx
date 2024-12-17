import React, { useEffect, useState } from "react";
import phone from "../assets/contact/phone.png";
import mail from "../assets/contact/mail.png";
import location from "../assets/contact/location.svg";
import email from "../assets/contact/email.svg";
import user from "../assets/bookingForm/user.svg";
import phone2 from "../assets/bookingForm/phone.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Loader from "../components/shared/Loader";
import toast from "react-hot-toast";
import { queryClient } from "../main";

const Contact = () => {
  window.scrollTo({
    top: 20,
    behavior: "smooth",
  });

  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  const { isPending, isSuccess, isError, mutate, error } = useMutation({
    mutationFn: async (newContact) => {
      return await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/contact/create`,
        newContact
      );
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    const { name, phone, email, message } = formData;
    mutate({ name, phone, email, message });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Message sent successfully");
      reset();
      queryClient.invalidateQueries("contacts");
    }
    if (isError) {
      toast.error("Failed to send message, please try again");
    }
    if (error) {
      toast.error(error.message);
    }
  }, [isSuccess, isError, error, reset]);

  if (isPending) return <Loader />;

  return (
    <section className="md:px-10 lg:px-[104px]">
      <h1 className="font-black text-[28px] lg:text-[52px] leading-[42px] lg:leading-[80px] text-center mt-[47px] mb-8 px-10 font-cw-primary">
        <span className="text-cw-secondary">Contact avec</span>{" "}
        <span className="text-cw-primary">Carzewash</span>
      </h1>
      <div className="lg:flex lg:gap-x-10">
        <div>
          <div className="bg-cw-secondary px-5 lg:px-8 py-10 md:rounded-xl">
            <div className="">
              <div>
                <h2 className="text-[28px] lg:text-[36px] lg:leading-[52px] leading-[42px] font-medium text-white font-cw-medium">
                  Nous sommes engagés Pour vous aider
                </h2>
                <p className="text-base leading-[24px] mt-3 text-base-100 mb-[42px]">
                  Notre équipe dévouée est prête à vous fournir le meilleur
                  service possible, répondant à vos besoins avec
                  professionnalisme et attention.
                </p>
                <div className="text-white lg:mt-[100px]">
                  <div className="flex text-xl gap-x-4 items-center">
                    <img src={phone} alt="phone icon" /> <p>07 75 79 96 98</p>
                  </div>
                  <div className="flex text-xl gap-x-4 items-center mt-7">
                    <img src={mail} alt="mail icon" />{" "}
                    <p>carzewash@gmail.com</p>
                  </div>
                  <div className="flex text-xl gap-x-4 items-center mt-7">
                    <img src={location} alt="location icon" />{" "}
                    <p>Ajaccio, France</p>
                  </div>
                </div>
              </div>
              <div className="mt-20 lg:mt-[100px] flex gap-x-5">
                <a href="_" className="group">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white group-hover:fill-cw-primary"
                  >
                    <g id="Facebook">
                      <path
                        id="Vector"
                        d="M20.0381 40H19.9501C8.94974 40 0 31.0476 0 20.044V19.956C0 8.9524 8.94974 0 19.9501 0H20.0381C31.0385 0 39.9882 8.9524 39.9882 19.956V20.044C39.9882 31.0476 31.0385 40 20.0381 40ZM19.9501 1.35396C9.69555 1.35396 1.35356 9.69843 1.35356 19.956V20.044C1.35356 30.3016 9.69555 38.646 19.9501 38.646H20.0381C30.2927 38.646 38.6347 30.3016 38.6347 20.044V19.956C38.6347 9.69843 30.2927 1.35396 20.0381 1.35396H19.9501Z"
                      />
                      <path
                        id="Vector_2"
                        d="M22.6844 15.5149V19.7244H27.8902L27.0659 25.3948H22.6844V38.4591C21.8059 38.581 20.9072 38.6446 19.9949 38.6446C18.9418 38.6446 17.9077 38.5607 16.9006 38.3982V25.3948H12.0995V19.7244H16.9006V14.5739C16.9006 11.3786 19.49 8.78711 22.6857 8.78711V8.78982C22.6952 8.78982 22.7033 8.78711 22.7128 8.78711H27.8915V13.6911H24.5076C23.5019 13.6911 22.6857 14.5076 22.6857 15.5136L22.6844 15.5149Z"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/carzewash/profilecard/?igsh=d3Q2Z2prMm1jZWx1"
                  target="_"
                  className="group"
                >
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white group-hover:fill-cw-primary"
                  >
                    <g id="Vector">
                      <path d="M21.0263 40H20.9383C9.93796 40 0.98822 31.0476 0.98822 20.044V19.956C0.98822 8.95236 9.93796 0 20.9383 0H21.0263C32.0267 0 40.9765 8.95236 40.9765 19.956V20.044C40.9765 31.0476 32.0267 40 21.0263 40ZM20.9383 1.35396C10.6838 1.35396 2.34178 9.69839 2.34178 19.956V20.044C2.34178 30.3016 10.6838 38.646 20.9383 38.646H21.0263C31.2809 38.646 39.6229 30.3016 39.6229 20.044V19.956C39.6229 9.69839 31.2809 1.35396 21.0263 1.35396H20.9383Z" />
                      <path d="M26.9604 8.53906H15.0057C11.703 8.53906 9.01622 11.2267 9.01622 14.5303V25.4703C9.01622 28.774 11.703 31.4616 15.0057 31.4616H26.9604C30.2631 31.4616 32.9499 28.774 32.9499 25.4703V14.5303C32.9499 11.2267 30.2631 8.53906 26.9604 8.53906ZM11.1291 14.5303C11.1291 12.3924 12.8684 10.6526 15.0057 10.6526H26.9604C29.0976 10.6526 30.837 12.3924 30.837 14.5303V25.4703C30.837 27.6082 29.0976 29.3481 26.9604 29.3481H15.0057C12.8684 29.3481 11.1291 27.6082 11.1291 25.4703V14.5303Z" />
                      <path d="M20.983 25.5728C24.0543 25.5728 26.5543 23.0735 26.5543 20C26.5543 16.9265 24.0556 14.4271 20.983 14.4271C17.9105 14.4271 15.4118 16.9265 15.4118 20C15.4118 23.0735 17.9105 25.5728 20.983 25.5728ZM20.983 16.542C22.8902 16.542 24.4414 18.0936 24.4414 20.0013C24.4414 21.909 22.8902 23.4607 20.983 23.4607C19.0759 23.4607 17.5247 21.909 17.5247 20.0013C17.5247 18.0936 19.0759 16.542 20.983 16.542Z" />
                      <path d="M27.07 15.3273C27.897 15.3273 28.5711 14.6544 28.5711 13.8258C28.5711 12.9971 27.8984 12.3242 27.07 12.3242C26.2416 12.3242 25.5689 12.9971 25.5689 13.8258C25.5689 14.6544 26.2416 15.3273 27.07 15.3273Z" />
                    </g>
                  </svg>
                </a>
                <a href="https://wa.me/7 82 04 53 12" className="group">
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white group-hover:fill-cw-primary"
                  >
                    <g id="Vector">
                      <path d="M21.0146 40H20.9266C9.92621 40 0.976471 31.0476 0.976471 20.044V19.956C0.976471 8.95236 9.92621 0 20.9266 0H21.0146C32.015 0 40.9647 8.95236 40.9647 19.956V20.044C40.9647 31.0476 32.015 40 21.0146 40ZM20.9266 1.35396C10.672 1.35396 2.33003 9.69839 2.33003 19.956V20.044C2.33003 30.3016 10.672 38.646 20.9266 38.646H21.0146C31.2692 38.646 39.6112 30.3016 39.6112 20.044V19.956C39.6112 9.69839 31.2692 1.35396 21.0146 1.35396H20.9266Z" />
                      <path d="M24.7368 25.6522C19.7923 25.6522 15.7695 21.6269 15.7681 16.6809C15.7695 15.4271 16.7901 14.4076 18.0408 14.4076C18.1694 14.4076 18.2966 14.4184 18.4184 14.44C18.6864 14.4847 18.9409 14.5754 19.1751 14.7122C19.2089 14.7325 19.2319 14.765 19.2373 14.8029L19.7598 18.0971C19.7666 18.1364 19.7544 18.1743 19.7287 18.2027C19.4404 18.5222 19.0722 18.7524 18.6621 18.8675L18.4644 18.923L18.5389 19.1139C19.213 20.8307 20.5855 22.2023 22.3031 22.8793L22.494 22.9551L22.5495 22.7574C22.6645 22.3472 22.8946 21.9789 23.2141 21.6905C23.2371 21.6688 23.2682 21.658 23.2994 21.658C23.3061 21.658 23.3129 21.658 23.321 21.6594L26.6142 22.182C26.6535 22.1888 26.686 22.2104 26.7063 22.2443C26.8416 22.4785 26.9323 22.7344 26.9783 23.0025C27 23.1216 27.0095 23.2476 27.0095 23.3789C27.0095 24.6313 25.9902 25.6508 24.7368 25.6522Z" />
                      <path d="M33.5052 18.9151C33.2385 15.9012 31.8579 13.1053 29.6178 11.0432C27.3641 8.96891 24.4404 7.82617 21.3827 7.82617C14.6717 7.82617 9.2115 13.288 9.2115 20.001C9.2115 22.2539 9.83277 24.4487 11.009 26.3605L8.38581 32.169L16.7847 31.274C18.2452 31.8725 19.7909 32.1758 21.3813 32.1758C21.7996 32.1758 22.2287 32.1541 22.6591 32.1094C23.0381 32.0688 23.4212 32.0092 23.7975 31.9334C29.4174 30.7974 33.5201 25.8081 33.5526 20.0659V20.001C33.5526 19.6354 33.5363 19.2698 33.5038 18.9164L33.5052 18.9151ZM17.1082 28.7245L12.4614 29.2201L13.8488 26.1452L13.5713 25.7729C13.551 25.7458 13.5307 25.7187 13.5077 25.6876C12.303 24.0236 11.6668 22.0576 11.6668 20.0023C11.6668 14.6433 16.0253 10.2836 21.3827 10.2836C26.4017 10.2836 30.656 14.2006 31.0661 19.2008C31.0877 19.4689 31.0999 19.7383 31.0999 20.0037C31.0999 20.0795 31.0986 20.154 31.0972 20.2338C30.9943 24.7168 27.8636 28.5241 23.4834 29.4936C23.1491 29.5681 22.8066 29.6249 22.4656 29.6615C22.1109 29.7021 21.7468 29.7224 21.3854 29.7224C20.0982 29.7224 18.8475 29.4733 17.6658 28.9804C17.5345 28.9276 17.4059 28.8708 17.2855 28.8125L17.1095 28.7272L17.1082 28.7245Z" />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-5 md:px-0 py-8 lg:pt-3 flex flex-col gap-y-4 md:gap-y-6"
          >
            <label className="flex items-center gap-[10px] rounded-[10px] border-[2px] py-3 px-[18px] ">
              <img
                className={`opacity-40 ${isNameFocused ? "hidden" : "flex"}`}
                src={user}
                alt=""
              />
              <input
                {...register("name", { required: true })}
                type="text"
                className="outline-none placeholder-cw-secondary placeholder-opacity-60"
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
                name="name"
                id="name"
                placeholder="Votre nom complet"
              />
            </label>
            <div className="flex flex-col gap-y-4 md:gap-y-6 md:flex-row md:gap-x-5">
              <label className="flex items-center gap-[10px] rounded-[10px] border-[2px] py-3 px-[18px] md:w-full">
                <img
                  className={`opacity-40 ${isEmailFocused ? "hidden" : "flex"}`}
                  src={email}
                  alt="email"
                />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  className="outline-none placeholder-cw-secondary placeholder-opacity-60 text-ellipsis"
                  name="email"
                  id="email"
                  placeholder="Adresse Email"
                />
              </label>
              <label className="flex items-center gap-[10px] rounded-[10px] border-[2px] py-3 px-[18px] md:w-full">
                <img
                  className={`opacity-40 ${isPhoneFocused ? "hidden" : "flex"}`}
                  src={phone2}
                  alt=""
                />
                <input
                  {...register("phone", { required: true })}
                  type="phone"
                  onFocus={() => setIsPhoneFocused(true)}
                  onBlur={() => setIsPhoneFocused(false)}
                  className="outline-none placeholder-cw-secondary placeholder-opacity-60"
                  name="phone"
                  id="phone"
                  placeholder="Numéro de téléphone"
                />
              </label>
            </div>
            <textarea
              {...register("message", { required: true })}
              className="rounded-[10px] border-[2px] pt-3 pb-10 px-[18px] outline-none text-cw-secondary opacity-60 border-[#14141433]"
              name="message"
              id="message"
              placeholder=""
            ></textarea>
            <button
              type="submit"
              className="px-[51px] py-[17px] bg-cw-primary rounded-md mt-4 lg:w-fit font-cw-medium text-[20px] text-white hover:bg-cw-secondary transform hover:scale-110 transition duration-150 ease-in-out"
            >
              Contact
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
