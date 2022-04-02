import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { login } = useGlobalContext();
  const { state } = useLocation();

  const [email, setEmail] = useState(process.env.REACT_APP_TEST_EMAIL);
  const [password, setPassword] = useState(process.env.REACT_APP_TEST_PASSWORD);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      setError("");
      setLoading(true);

      await login(email, password);
      setLoading(false);
      state ? navigate(-1) : navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to log in");
    }
  };
  function handleSubmit(e) {
    e.preventDefault();

    handleLogin(email, password);
  }

  return (
    <div className="mainC">
      <div className="containerLog">
        <div className="c2">
          <div className="controls">
            <form className="login" onSubmit={handleSubmit}>
              <h2 className="login1">Log In</h2>
              <input
                className="username"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                required
              />
              <input
                className="username"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <button
                className="btn"
                disabled={loading}
                onClick={() => {
                  handleLogin(
                    process.env.REACT_APP_TEST_EMAIL,
                    process.env.REACT_APP_TEST_PASSWORD
                  );
                }}
                type="button"
              >
                Log In With Test Credentials
              </button>
            </form>
          </div>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
