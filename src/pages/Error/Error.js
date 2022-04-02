import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const ErrorPage = () => {
  return (
    <section className="mainErrorContainer">
      <h1>ERROR 404</h1>
      <p className="zoom-area">
        <b>Oh Oh!!!</b> Looks like you've lost your way. Think, recollect and
        try again.{" "}
      </p>
      <section className="error-container">
        <span>
          <span>4</span>
        </span>
        <span>0</span>
        <span>
          <span>4</span>
        </span>
      </section>
      <div className="link-container">
        <Link to="/" className="more-link">
          Back to Home
        </Link>
      </div>
    </section>
  );
};
export default ErrorPage;
