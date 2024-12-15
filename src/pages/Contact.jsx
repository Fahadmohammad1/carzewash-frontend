import React, { useEffect } from "react";
import facebook from "../assets/footer/Facebook.svg";
import instagram from "../assets/footer/Instagram.svg";
import whatsapp from "../assets/footer/Whatsapp.svg";
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
  const { isPending, isSuccess, isError, mutate, error } = useMutation({
    mutationFn: async (newContact) => {
      return await axios.post(
        "https://carzewash-backend.vercel.app/api/contact/create",
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
                <img src={facebook} alt="facebook logo" />
                <img src={instagram} alt="instagram logo" />
                <img src={whatsapp} alt="whatsapp logo" />
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
              <img className="opacity-40" src={user} alt="" />
              <input
                {...register("name", { required: true })}
                type="text"
                className="outline-none placeholder-cw-secondary placeholder-opacity-60"
                name="name"
                id="name"
                placeholder="Votre nom complet"
              />
            </label>
            <div className="flex flex-col gap-y-4 md:gap-y-6 md:flex-row md:gap-x-5">
              <label className="flex items-center gap-[10px] rounded-[10px] border-[2px] py-3 px-[18px] md:w-full">
                <img className="opacity-40" src={email} alt="" />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="outline-none placeholder-cw-secondary placeholder-opacity-60"
                  name="email"
                  id="email"
                  placeholder="Adresse Email"
                />
              </label>
              <label className="flex items-center gap-[10px] rounded-[10px] border-[2px] py-3 px-[18px] md:w-full">
                <img className="opacity-40" src={phone2} alt="" />
                <input
                  {...register("phone", { required: true })}
                  type="phone"
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
