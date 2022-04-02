import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data";
import { useNavigate } from "react-router-dom";
import { addNewItem } from "../../utils/utils";
import { useGlobalContext } from "../../context";
import Carousel from "react-elastic-carousel";
import { v4 as uuidv4 } from "uuid";
import NoItem from "../../components/NoItem/NoItem";
import "./Hotel.css";

const Hotel = () => {
  const { cartKey } = useGlobalContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const [hotel, setHotel] = useState();
  const [added, setAdded] = useState(false);

  function getHotel() {
    if (data[id]) {
      setHotel(data[id]);
    }
  }

  useEffect(() => {
    getHotel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!hotel) {
    return (
      <h2 className="section-title no-search">
        <NoItem item="Sorry No Such Hotel Exists 😥" />
      </h2>
    );
  }

  const { name, rating, img, details, location, price, condition } = hotel;
  const loadImages = () => {
    return img.map((img) => (
      <div key={uuidv4()}>
        <img src={img} alt={name} className="hotel-img"></img>
      </div>
    ));
  };
  const addHotel = () => {
    if (added) {
      return navigate("/checkout");
    } else {
      addNewItem(cartKey, hotel);
      setAdded(!added);
    }
  };

  return (
    <div className="section hotel no-search">
      <div className="hotel-data">
        <Carousel>{loadImages()}</Carousel>

        <div className="hotel-info">
          <h2 className="hotel-name">
            {name}
            <button className="button-books" onClick={addHotel}>
              {added ? "Go to Checkout" : "Book Now"}
            </button>
          </h2>
          <div className="hotel-combined-data">
            <div className="hotel-inf-data">
              <div className="center-all">
                <span className="hotel-inf">Rating : </span>
                <span className=" rating-pill center-all">{rating}</span>
              </div>
              <span className="hotel-inf">Location : {location}</span>
              <span className="hotel-inf">Price : {price}</span>
              <span className="hotel-inf">Condition : {condition}</span>:
            </div>
            <div className="hotel-inf-data">
              <span className="center-all hotel-inf">Details about {name}</span>
              <div className="hotel-details">{details}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
