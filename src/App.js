import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Bookings from "./pages/Bookings/Bookings";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/Error/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/hotel/:id" element={<Hotel />} />
          <Route
            path="/bookings"
            element={<PrivateRoute element={<Bookings />} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
