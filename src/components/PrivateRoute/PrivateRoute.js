import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

export default function PrivateRoute({ element }) {
  const { user } = useGlobalContext();

  return user ? element : <Navigate to="/login" state={{ from: "prev" }} />;
}
