import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

let Nav = () => {
  return (
    <nav>
      <Link to="/"><i className="fa-solid fa-house"></i>Home</Link>
      <Link to="/project/PythonProject/BaseConversionApplication"><i className="fa-brands fa-r-project"></i>Project</Link>
      <Link to="/test"><i className="fa-solid fa-share-from-square"></i>Test</Link>
      <Link to="/pdf"><i className="fa-solid fa-book"></i>E-Book</Link>
      <Link to="/certificate"><i className="fa-solid fa-graduation-cap"></i>Certificate</Link>
      <Link to="/loginsignup"> <i className="fa-solid fa-user-plus"></i>Login/SignUp</Link>
    </nav>
  );
};

export default Nav;
