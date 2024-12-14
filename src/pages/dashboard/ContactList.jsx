import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loader from "../../components/shared/Loader";
import axios from "axios";
import user from "../../assets/dashboard/profile.svg";
import message from "../../assets/dashboard/message.svg";
import trash from "../../assets/dashboard/trash-2.svg";

const ContactList = () => {
  const { phone, email, password } = JSON.parse(localStorage.getItem("admin"));
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await axios.get(
        `https://carzewash-backend.vercel.app/api/contact?phone=${phone}&email=${email}&password=${password}`
      );

      return res.data.data;
    },
  });

  if (isPending) return <Loader />;

  if (error) {
    toast.error(error.message);
  }

  // delete a contact message

  const handleDelete = async (id) => {
    const res = prompt("Are you sure? The message will be permanently deleted");

    if (res !== null) {
      const { isPending, isSuccess, isError, error } = useMutation({
        mutationFn: async () => {
          return await axios.delete(
            `https://carzewash-backend.vercel.app/api/contact/${id}`
          );
        },
      });

      if (isPending) return <Loader />;
      if (isSuccess) {
        toast.success("Message deleted successfully");
        reset();
      }
      if (isError) {
        toast.error("Failed to delete message, please try again");
      }

      if (error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <section>
      <div className="bg-white">
        <div className="p-6 pt-0 overflow-scroll">
          <table className="w-full min-w-max table-auto text-left ">
            <thead className="border-b font-cw-regular">
              <tr>
                <th className="p-4 text-[#8A92A6]">
                  <p className="hidden lg:block antialiased font-sans text-sm font-normal">
                    User
                  </p>
                  <img
                    className="lg:hidden size-6"
                    src={user}
                    alt="user icon"
                  />
                </th>
                <th className="p-4 text-[#8A92A6]">
                  <p className="hidden lg:block antialiased font-sans text-sm font-normal">
                    Phone{" "}
                  </p>
                  <img
                    className="lg:hidden size-6"
                    src={message}
                    alt="user icon"
                  />
                </th>
                <th className="p-4 text-[#8A92A6] hidden lg:block">
                  <p className="hidden lg:block antialiased font-sans text-sm font-normal">
                    message
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.length &&
                data?.map((contact) => (
                  <tr key={contact.id}>
                    <td className="p-4 border-b border-[#EAECF0]">
                      <p className="font-cw-regular text-[15px] text-[#101828]">
                        {contact.name}
                      </p>
                      <p className="text-sm text-[#667085] font-cw-regular">
                        {contact.email}
                      </p>
                    </td>
                    <td className="p-4 border-b border-[#EAECF0]">
                      <p className="font-cw-regular text-[15px] text-[#101828]">
                        {contact.phone}
                      </p>
                    </td>
                    <td className="p-4 border-b border-[#EAECF0] hidden lg:table-cell">
                      <p className="font-cw-regular text-[15px] text-[#101828] overflow-ellipsis">
                        {contact.message}
                      </p>
                    </td>
                    <td className="p-4 border-b border-[#EAECF0]">
                      <img
                        className="cursor-pointer"
                        onClick={() => handleDelete(contact.id)}
                        src={trash}
                        alt="trash icon"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ContactList;
