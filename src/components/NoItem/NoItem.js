import React from "react";
import "./NoItem.css";

const NoItem = ({ item }) => (
  <div className="wrapper">
    <div className="content"> {item}</div>
  </div>
);

export default NoItem;
