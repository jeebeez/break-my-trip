import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useGlobalContext } from "../../context";
import BookingItem from "../../components/BookingItem/BookingItem";
import NoItem from "../../components/NoItem/NoItem";

const Bookings = () => {
  const { bookings, loadBookings } = useGlobalContext();

  useEffect(() => {
    loadBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayBookings = () => {
    return bookings.map((item, index) => {
      return <BookingItem key={uuid()} index={index} booking={item} />;
    });
  };

  if (bookings.length === 0)
    return (
      <h2 className="section-title no-search">
        <NoItem item="It's so Empty in here 🗑️" />
      </h2>
    );

  return (
    <div className="section no-search">
      <div className="hotel-center ">{displayBookings()}</div>
    </div>
  );
};

export default Bookings;
