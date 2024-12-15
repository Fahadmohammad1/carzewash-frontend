import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loader from "../../components/shared/Loader";
import axios from "axios";
import user from "../../assets/dashboard/profile.svg";
import message from "../../assets/dashboard/message.svg";
import trash from "../../assets/dashboard/trash-2.svg";
import { queryClient } from "../../main";

const ContactList = () => {
  const { phone, email, password } = JSON.parse(localStorage.getItem("admin"));

  // Fetch contacts
  const {
    isPending: getPending,
    isError: isGetError,
    data,
    error: getError,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await axios.get(
        `https://carzewash-backend.vercel.app/api/contact?phone=${phone}&email=${email}&password=${password}`
      );
      return res.data.data;
    },
  });

  // Delete a contact
  const {
    mutate,
    isPending: isDeletePending,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
    error: deleteError,
  } = useMutation({
    mutationFn: async (contactId) => {
      return await axios.delete(
        `https://carzewash-backend.vercel.app/api/contact/${contactId}?phone=${phone}&email=${email}&password=${password}`
      );
    },
    onSuccess: () => {
      toast.success("Message deleted successfully");
      queryClient.invalidateQueries("contacts");
    },
    onError: (error) => {
      toast.error(`Failed to delete message: ${error?.message}`);
    },
  });

  const handleDelete = (id) => {
    const res = prompt("Are you sure? The message will be permanently deleted");

    if (res !== null) {
      mutate(id);
    }
  };

  if (getPending || isDeletePending) return <Loader />;

  if (getError) toast.error(getError?.message);

  if (deleteError) toast.error(deleteError?.message);

  return (
    <section>
      <div className="bg-white">
        <div className="p-6 pt-0 overflow-scroll rounded-lg">
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
