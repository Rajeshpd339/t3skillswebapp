import React, { useState } from "react";
import "./LoginSignUp.css"; // Import your CSS styles here
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const LoginSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");

  const isNameValid = (name) => {
    // Check if the name consists of only characters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const isEmailValid = (email) => {
    // A basic email validation using a regular expression
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const isMobileNoValid = (mobileNo) => {
    // Check if mobile number consists of only digits
    const mobileNoRegex = /^\d+$/;
    return mobileNoRegex.test(mobileNo);
  };

  const isPasswordValid = (password) => {
    // Password must be at least 8 characters long
    return password.length >= 8;
  };

  const handleSubmit = () => {
    if (
      isNameValid(firstName) &&
      isNameValid(lastName) &&
      isEmailValid(email) &&
      isMobileNoValid(mobileNo) &&
      isPasswordValid(password) &&
      password === reenterPassword
    ) {
      // Valid input, you can submit the form or perform further actions here
    } else {
      alert("Invalid input. Please check your input.");
    }
  };

  return (
    <div>
      <div className="all">
        <div className="signupclass">
          <div className="sign">
            <h1>
              Sign<span>Up</span>
            </h1>
          </div>
          <div className="name">
            <div className="input-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="emailAddress">Email Address:</label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="mobileNo">Mobile No:</label>
              <input
                type="tel"
                id="mobileNo"
                name="mobileNo"
                placeholder="Mobile Number"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={togglePasswordVisibility}>
                {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
              </button>
            </div>
            <div className="input-group">
              <label htmlFor="reenterPassword">Re-Enter:</label>
              <input
                type={showPassword1 ? "text" : "password"}
                id="reenterPassword"
                name="reenterPassword"
                placeholder="Password"
                value={reenterPassword}
                onChange={(e) => setReenterPassword(e.target.value)}
              />
              <button onClick={togglePasswordVisibility1}>
                {showPassword1 ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
              </button>
            </div>
          </div>
          <div className="submit-button"> 
            <button type="button" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
          <div className="reg">
            <p>
              Already have an Account? <Link to="/login">Login Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
