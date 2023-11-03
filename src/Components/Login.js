import React, { useState } from "react";
import "./Login.css"; // Import your CSS styles here

const Login = () => {
  const [data, setdata] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const datafun = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isEmailValid = (email) => {
    // A basic email validation using a regular expression
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    // Password must be at least 8 characters long
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValid(data.email)) {
      alert("Invalid email format. Please enter a valid email address.");
    } else if (!isPasswordValid(data.password)) {
      alert("Invalid password format. Password must be at least 8 characters long.");
    } else {
      console.log(data); // Valid input, you can perform further actions here
    }
  };

  return (
    <div className="maindiv">
      <div className="login-container">
        <h1>
          Log<span>In</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email_Id:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={datafun}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={datafun}
              required
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}{" "}
              {/* Show/Hide button */}
            </button>
          </div>
          <div className="form-actions">
            <button type="submit">Login</button>
            <button type="button">Forgot Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
