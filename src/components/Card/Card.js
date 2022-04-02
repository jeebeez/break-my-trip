import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, name, rating, img, details, location }) => {
  const url = `/hotel/${id - 1}`;
  return (
    <Link to={url}>
      <article className="card">
        <div className="card-img">
          <img src={img[0]} alt={name} />
        </div>
        <div className="card-details">
          <p className="card-name">{name}</p>
          <div className="linefoot" />

          <div className="space-all">
            <div className="center-all">
              <span>Rating : </span>
              <span className=" rating-pill center-all">{rating}</span>
            </div>
            <div>{location}</div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Card;
