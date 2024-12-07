import React, { useEffect, useState } from "react";
import { IoArrowDownOutline } from "react-icons/io5";
import userAvatar2 from "../../assets/user-avatar2.svg";
import toast from "react-hot-toast";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getBookings = async () => {
      setLoading(true);
      try {
        await fetch(
          "http://localhost:5000/api/booking?phone=00000&email=carzewash@gmail.com&password=carzewashadmin"
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
    return <p>Loading....</p>;
  }
  console.log(bookings);
  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-xs">
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="w-[20px] border-[#000AFF]"
                  />
                </label>
              </th>
              <th className="inline-flex items-center gap-x-2">
                Users <IoArrowDownOutline />
              </th>
              <th>
                Car Model <IoArrowDownOutline />
              </th>
              <th>
                Date <IoArrowDownOutline />
              </th>
              <th>
                Time <IoArrowDownOutline />
              </th>
              <th>
                Formula <IoArrowDownOutline />
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.length &&
              bookings?.map((booking) => (
                <tr key={booking.id}>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="w-[20px] border-[#000AFF] mr-0"
                      />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle">
                          <img
                            className="size-10 rounded-full"
                            src={userAvatar2}
                            alt="user avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-normal text-[15px] text-cw-secondary">
                          {booking.fullName}
                        </div>
                        <div className="text-sm opacity-50">
                          {booking.phone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{booking.carModel}</td>
                  <td>{booking.date}</td>
                  <th className="font-normal">{booking.time}</th>
                  <th className="font-normal">{booking.formula}</th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BookingList;
