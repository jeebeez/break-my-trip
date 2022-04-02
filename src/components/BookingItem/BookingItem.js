import React from "react";
import { useGlobalContext } from "../../context";
import { removeItem } from "../../utils/utils";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { MdOutlineCancel } from "react-icons/md";
import "./BookingItem.css";
import "../Card/Card.css";

const CartItem = ({ index, booking }) => {
  const { bookingKey, loadBookings } = useGlobalContext();
  const { id, name, img, rating, location, toDate, fromDate } = booking;

  const formatToSimpleReadableDateWithoutTZ = (date) =>
    format(
      new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000),
      "MMMM d, yyyy"
    );

  return (
    <>
      <article className="card">
        <Link to={`/hotel/${id}`}>
          <div className="card-img">
            <img src={img[0]} alt={name} />
          </div>
        </Link>
        <div className="card-details">
          <div className="date-picker">
            <p className="card-name">{name}</p>
            <div className="date-picker">
              <button
                className="button-default cancels clear-m"
                onClick={() => {
                  removeItem(bookingKey, index, loadBookings);
                }}
              >
                <MdOutlineCancel />
              </button>
            </div>{" "}
          </div>
          <div className="linefoot" />

          <div className="hotel-data-check">
            <div className="space-all">
              <div className="center-all">
                <span>Rating : </span>
                <span className=" rating-pill center-all">{rating}</span>
              </div>
              <div>{location}</div>
            </div>
            <div className="space-all-bookings">
              <div>
                From:
                <div>
                  {formatToSimpleReadableDateWithoutTZ(new Date(fromDate))}
                </div>
              </div>
              <div>
                To:
                <div>
                  {formatToSimpleReadableDateWithoutTZ(new Date(toDate))}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </article>
    </>
  );
};

export default CartItem;
