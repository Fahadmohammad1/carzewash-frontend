import React, { useEffect, useState } from "react";
import { IoArrowDownOutline } from "react-icons/io5";
import userAvatar2 from "../../assets/user-avatar2.svg";
import toast from "react-hot-toast";
import Loader from "../../components/shared/Loader";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const { phone, email, password } = JSON.parse(localStorage.getItem("admin"));

  useEffect(() => {
    const getBookings = async () => {
      setLoading(true);
      try {
        await fetch(
          `http://localhost:5000/api/booking?phone=${phone}&email=${email}&password=${password}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              setLoading(false);
              setBookings(data.data);
            } else {
              setLoading(false);
            }
          });
      } catch (err) {
        setLoading(false);
        toast.error("Something went wrong, Please login again");
      }
    };
    getBookings();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section>
      <div className="bg-white">
        <div className="p-6 overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                    Transaction
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                    Amount
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                    Date
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                    Status
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                    Account
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"></p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg"
                      alt="Spotify"
                      className="inline-block relative object-center w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                    />
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                      Spotify
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    $2,500
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    Wed 3:00pm
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <div
                      className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md"
                      style={{ opacity: "1" }}
                    >
                      <span className="">paid</span>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                      <img
                        src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                        alt="visa"
                        className="inline-block relative object-center rounded-md h-full w-full object-contain p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">
                        visa
                      </p>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                        06/2026
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BookingList;
