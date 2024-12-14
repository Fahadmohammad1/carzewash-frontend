import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import Loader from "../components/shared/Loader";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    const { phone, email, password } = formData;
    const loginInfo = {
      phone,
      email,
      password,
    };

    setLoading(true);
    setError(null);

    try {
      await fetch("https://carzewash-backend.vercel.app/api/admin/login", {
        method: "POST",
        body: loginInfo,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data.verified === 200) {
            toast.success("Login Successfull");
            localStorage.setItem("admin", JSON.stringify(loginInfo));
            navigate(from, { replace: true });
          } else {
            toast.error("Login failed");
          }
        });
    } catch (err) {
      setError(err.message);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }

    reset();
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <section className="flex justify-center items-center h-screen bg-cw-secondary">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-5 md:px-8 py-8 flex flex-col gap-y-3 md:gap-y-6"
      >
        <label className="flex items-center gap-[10px] rounded-[10px] border-[1px] py-3 px-[18px] md:px-5">
          {/* <img src={user} alt="" /> */}
          <input
            {...register("phone", { required: true })}
            type="number"
            className="border-0 bg-cw-secondary text-white"
            name="phone"
            id="phone"
            placeholder="Phone"
          />
        </label>
        {errors.phone && (
          <span className="text-red-400">Phone is required</span>
        )}

        {/** email */}
        <label className="flex items-center gap-[10px] rounded-[10px] border-[1px] py-3 px-[18px] md:px-5">
          {/* <img src={user} alt="" /> */}
          <input
            {...register("email", { required: true })}
            type="text"
            className="border-0 bg-cw-secondary text-white"
            name="email"
            id="email"
            placeholder="Email"
          />
        </label>
        {errors.email && (
          <span className="text-red-400">Email is required</span>
        )}

        {/** password */}
        <label className="flex items-center gap-[10px] rounded-[10px] border-[1px] py-3 px-[18px] md:px-5">
          {/* <img src={user} alt="" /> */}
          <input
            {...register("password", { required: true })}
            type="text"
            className="border-0 bg-cw-secondary text-white"
            name="password"
            id="password"
            placeholder="Password"
          />
        </label>
        {errors.oldPass && (
          <span className="text-red-400">Old Password is required</span>
        )}
        <button
          type="submit"
          className="px-[51px] py-[17px] bg-cw-primary rounded-md"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
