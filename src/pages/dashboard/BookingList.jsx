import React, { useEffect, useState } from "react";
import userAvatar2 from "../../assets/user-avatar2.svg";
import toast from "react-hot-toast";
import Loader from "../../components/shared/Loader";
import user from "../../assets/dashboard/user.svg";
import car from "../../assets/dashboard/car-m.svg";
import date from "../../assets/dashboard/date-m.svg";
import formula from "../../assets/dashboard/formula-m.svg";

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
        <div className="p-6 pt-0 overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead className="border-b">
              <tr>
                <th>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="appearance-none size-[20px] border border-[#000AFF] rounded-md mt-1"
                  />
                </th>
                <th className="p-4 text-[#8A92A6]">
                  <p className="hidden lg:block antialiased font-sans text-sm font-normal">
                    Users
                  </p>
                  <img
                    className="lg:hidden size-6"
                    src={user}
                    alt="user icon"
                  />
                </th>
                <th className="p-4 text-[#8A92A6]">
                  <p className="hidden lg:block antialiased font-sans text-sm font-normal">
                    Car Model
                  </p>
                  <img className="lg:hidden size-6" src={car} alt="user icon" />
                </th>
                <th className="p-4 text-[#8A92A6]">
                  <p className="hidden lg:block antialiased font-sans text-sm font-normal">
                    Date
                  </p>
                  <img
                    className="lg:hidden size-6"
                    src={date}
                    alt="user icon"
                  />
                </th>
                <th className="p-4 text-[#8A92A6] hidden lg:block">
                  <p className="hidden lg:block antialiased font-sans text-sm font-normal">
                    Time
                  </p>
                </th>
                <th className="p-4 text-[#8A92A6]">
                  <p className="hidden lg:block antialiased font-sans text-sm font-normal">
                    Formula
                  </p>
                  <img
                    className="lg:hidden size-6"
                    src={formula}
                    alt="user icon"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.length &&
                bookings?.map((booking) => (
                  <tr key={booking.id}>
                    <td>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="appearance-none size-[20px] border border-[#000AFF] rounded-md mt-1"
                      />
                    </td>
                    <td className="p-4 border-b border-[#EAECF0]">
                      <div className="flex items-center gap-3">
                        <img
                          src={userAvatar2}
                          alt="avatar"
                          className="lg:inline-block hidden relative object-center size-10 rounded-full object-contain p-1"
                        />
                        <div className="flex flex-col">
                          <p className="font-cw-regular text-[15px] text-[#101828]">
                            {booking.fullName}
                          </p>
                          <p className="font-cw-regular text-[14px] text-[#667085]">
                            {booking.phone}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 border-b border-[#EAECF0]">
                      <p className="font-cw-regular text-[15px] text-[#101828]">
                        {booking.carModel}
                      </p>
                    </td>
                    <td className="p-4 border-b border-[#EAECF0]">
                      <p className="font-cw-regular text-[15px] text-[#101828]">
                        {booking.date}
                      </p>
                      <p className="font-cw-regular text-[15px] text-[#101828] lg:hidden">
                        {booking.time}
                      </p>
                    </td>
                    <td className="p-4 border-b border-[#EAECF0]">
                      <p className="font-cw-regular text-[15px] text-[#101828]">
                        {booking.time}
                      </p>
                    </td>
                    <td className="p-4 border-b border-[#EAECF0]">
                      <p className="font-cw-regular text-[15px] text-[#101828]">
                        {booking.formula}
                      </p>
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

export default BookingList;
