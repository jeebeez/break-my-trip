import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useGlobalContext } from "../../context";
import CartItem from "../../components/CartItem/CartItem";
import NoItem from "../../components/NoItem/NoItem";

const Checkout = () => {
  const { loadCart, cart } = useGlobalContext();

  useEffect(() => {
    loadCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayCart = () => {
    if (cart)
      return cart.map((item, index) => {
        return (
          <CartItem key={uuid()} index={index} hotel={item} reload={loadCart} />
        );
      });
  };

  if (cart.length === 0) {
    return (
      <h2 className="section-title no-search">
        <NoItem item="It's so Empty in here 🗑️" />
      </h2>
    );
  }
  return (
    <div className="section  no-search">
      <div className="hotel-center ">{displayCart()} </div>
    </div>
  );
};

export default Checkout;
