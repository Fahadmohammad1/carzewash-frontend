import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loader from "../shared/Loader";

const UpdatePassModal = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    const { phone, email, oldPass, newPass } = formData;

    const data = {
      phone,
      email,
      password: oldPass,
      newPassword: newPass,
    };

    try {
      const res = await fetch(
        "https://carzewash-backend.vercel.app/api/admin/update-password",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        toast.success("Updated Successfully");
      } else {
        toast.error("Failed to update");
      }
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }

    reset();
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <section>
      <dialog id="update_pass" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-cw-secondary">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-5 md:px-8 py-8 flex flex-col gap-y-3 md:gap-y-6"
          >
            <label className="flex items-center gap-[10px] rounded-[10px] border-[1px] py-3 px-[18px] md:px-5">
              {/* <img src={user} alt="" /> */}
              <input
                {...register("phone", { required: true })}
                type="number"
                className="border-0 bg-cw-secondary"
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
                className="border-0 bg-cw-secondary"
                name="email"
                id="email"
                placeholder="Email"
              />
            </label>
            {errors.email && (
              <span className="text-red-400">Email is required</span>
            )}

            {/**old password */}
            <label className="flex items-center gap-[10px] rounded-[10px] border-[1px] py-3 px-[18px] md:px-5">
              {/* <img src={user} alt="" /> */}
              <input
                {...register("oldPass", { required: true })}
                type="text"
                className="border-0 bg-cw-secondary"
                name="oldPass"
                id="oldPass"
                placeholder="Old Password"
              />
            </label>
            {errors.oldPass && (
              <span className="text-red-400">Old Password is required</span>
            )}

            {/** new password */}
            <label className="flex items-center gap-[10px] rounded-[10px] border-[1px] py-3 px-[18px] md:px-5">
              {/* <img src={user} alt="" /> */}
              <input
                {...register("newPass", { required: true })}
                type="text"
                className="border-0 bg-cw-secondary"
                name="newPass"
                id="newPass"
                placeholder="New Password"
              />
            </label>
            {errors.newPass && (
              <span className="text-red-400">New Password is required</span>
            )}

            <button
              type="submit"
              className="px-[51px] py-[17px] bg-cw-primary rounded-md"
            >
              Update
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default UpdatePassModal;
