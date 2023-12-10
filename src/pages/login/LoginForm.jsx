import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../appwrite/services/authentication";
import "./Login.css";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const currentLogin = auth.getLoginAccount();
    currentLogin.then((response) => {
      if (response) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, []);
  const validateForm = () => {
    const errors = [];

    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.push("Invalid email address");
    }
    if (!password || password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }
    setErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Submit form data to backend
      const loginData = await auth.loginAccount({ email, password });
      if (loginData) {
        navigate("/");
        window.alert("you are sucsessfully login");
      } else {
        window.alert("Somthing wrong");
      }

      console.log(
        " loginform :: Form submitted successfully! :: data ::",
        loginData
      );
    }
  };
  return (
    <>
      <div className="container2">
        <div className="form-container2">
          <h1>Login To Sketchpad</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="email">Email:</label>

              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.includes("Invalid email address") && (
                <span className="error">Invalid email address</span>
              )}
            </div>

            <div className="input-field">
              <label htmlFor="password">Password:</label>

              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.includes(
                "Password must be at least 8 characters long"
              ) && (
                <span className="error">
                  Password must be at least 8 characters long
                </span>
              )}
            </div>

            <button type="submit">Login</button>
            <div
              className="input-field"
              style={{ textAlign: "center", marginTop: "25px" }}
            >
              <p>
                Go for <Link to="/signup"> signup</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
