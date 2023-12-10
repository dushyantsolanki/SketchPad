import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../appwrite/services/authentication";
import "./RegisterForm.css";

function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    const currentLogin = auth.getLoginAccount();
    currentLogin.then((response) => {
      if (response) {
        navigate("/");
      } else {
        navigate("/signup");
      }
    });
  }, []);
  const validateForm = () => {
    const errors = [];
    if (!name) {
      errors.push("Name is required");
    }
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
      const accountData = await auth.createAccount({ email, password, name });
      console.log(accountData);

      if (accountData) {
        window.alert("Account created and welcom to sketchpad faimily");
      } else {
        window.alert("somthing wrong please try again");
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className="form-container">
          <h1>Welcome To Sketchpad</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="name">Name:</label>

              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.includes("Name is required") && (
                <span className="error">Name is required</span>
              )}
            </div>

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

            <button type="submit">Sign Up</button>

            <div
              className="input-field"
              style={{ textAlign: "center", marginTop: "25px" }}
            >
              <p>
                Go for{" "}
                <Link to="/login" style={{ color: "purple" }}>
                  {" "}
                  login
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
