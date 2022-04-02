import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { v4 as uuid } from "uuid";
import "./SearchBar.css";

const SearchBar = ({ size, setShowModal }) => {
  const { search } = useGlobalContext();
  const initialState = {
    searchTerm: "",
    rating: "all",
    location: "all",
  };
  const [searchData, setSearchData] = useState(initialState);

  const locations = ["Pune", "Bangalore", "Delhi", "Mumbai", "Chennai"];
  const ratings = [4, 3, 2, 1];

  const mapValues = (list, suffix) =>
    list.map((item) => (
      <option key={uuid()} value={item}>
        {item}
        {suffix}
      </option>
    ));

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchData);
    if (size === "mobile") setShowModal(false);
  };

  return (
    <div className={size === "mobile" ? "search-modal" : "search-bar"}>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setSearchData({ ...searchData, searchTerm: e.target.value });
          }}
          value={searchData.searchTerm}
          type="text"
          placeholder="Where are you headed ?"
        />
        <select
          onChange={(e) => {
            setSearchData({ ...searchData, location: e.target.value });
          }}
          value={searchData.location}
        >
          <option value="all">All Locations</option>
          {mapValues(locations)}
        </select>
        <select
          onChange={(e) => {
            setSearchData({ ...searchData, rating: e.target.value });
          }}
          value={searchData.rating}
        >
          <option value="all">Any Rating</option>
          {mapValues(ratings, " or above")}
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
