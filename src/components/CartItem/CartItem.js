import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { addNewItem, removeItem } from "../../utils/utils";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { TiTick } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import "./CartItem.css";
import "../Card/Card.css";

const CartItem = ({ index, hotel, reload }) => {
  const { user, cartKey, bookingKey, loadCart } = useGlobalContext();
  const { id, name, img, rating, location } = hotel;
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const navigate = useNavigate();

  const offsetDate = (selected) =>
    new Date(selected.getTime() - selected.getTimezoneOffset() * 60000);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!toDate || !fromDate) {
      alert("Please select a valid to & from date 🙏");
      return;
    }

    if (user) {
      const newBooking = { ...hotel, toDate, fromDate };
      addNewItem(bookingKey, newBooking);
      removeItem(cartKey, index, loadCart);
    } else {
      navigate("/login", { state: "prev" });
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div className="date-picker">
                <button className="button-default books clear-m" type="submit">
                  <TiTick />
                </button>
                <button
                  className="button-default cancels clear-m"
                  onClick={(e) => {
                    e.preventDefault();
                    removeItem(cartKey, index, reload);
                  }}
                >
                  <MdOutlineCancel />
                </button>
              </div>{" "}
            </form>
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
            <div className="space-all-date">
              <div>
                From:
                <DatePicker
                  selected={fromDate}
                  onChange={(date) => setFromDate(offsetDate(date))}
                  minDate={new Date()}
                  maxDate={toDate}
                  withPortal
                  portalId="root-portal-from-date"
                  className="date-style"
                  required
                />
              </div>
              <div>
                To:
                <DatePicker
                  selected={toDate}
                  onChange={(date) => setToDate(offsetDate(date))}
                  minDate={fromDate || new Date()}
                  withPortal
                  portalId="root-portal-to-date"
                  className="date-style"
                  required
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </article>
    </>
  );
};

export default CartItem;
