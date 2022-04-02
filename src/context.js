import React, { useState, useEffect, useContext } from "react";
import data from "./data";
import auth from "./firebase";
import { getAllItems } from "./utils/utils";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const cartKey = "user_cart";
  const bookingKey = "user_bookings";
  const [hotels, setHotels] = useState(data);
  const [cart, setCart] = useState(getAllItems(cartKey));
  const [bookings, setBookings] = useState(getAllItems(bookingKey));
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    return auth.signOut();
  }

  const loadCart = () => {
    const answer = getAllItems(cartKey);
    setCart(answer);
  };

  const loadBookings = () => {
    const answer = getAllItems(bookingKey);
    setBookings(answer);
  };
  const loadHotels = () => {
    setHotels(data);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const search = (searchData) => {
    const { searchTerm, rating, location } = searchData;
    const filterData = (field, value) => {
      let filteredData = data;
      if (location === "all" && rating === "all") return filteredData;
      if (location !== "all")
        filteredData = filteredData.filter(
          (hotel) => hotel.location === location
        );
      if (rating !== "all")
        filteredData = filteredData.filter((hotel) => hotel.rating >= rating);

      return filteredData;
    };

    const filteredData = filterData();

    const searchResults = filteredData.filter(
      (hotel) =>
        hotel.name.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) >
        -1
    );
    setHotels(searchResults);
  };

  const value = {
    search,
    login,
    hotels,
    cartKey,
    bookingKey,
    user,
    loadCart,
    loadBookings,
    cart,
    bookings,
    logout,
    loadHotels,
  };

  return (
    <AppContext.Provider value={value}>
      {!loading && children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
