import React, { useState } from "react";
import "./LogIn.css";
import logo from "../../assets/images/logo.png";
import { PiEyeClosedBold } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [showEye, setShowEye] = useState(false);

  return (
    <div className="LogIn_Main">
      <div className="form-container">
        <div className="reg_img">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <h5>Login</h5>
        {/* ------------------------ Form Start ------------------------- */}
        <form>
          {/*  ------------------------ Email part ----------------------- */}
          <div className="mb-4">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input-field"
            />
            {/*  Email Error ---------------------------------- */}
            <p className="error">error</p>
          </div>
          {/* -------------------------------------  Password Part */}

          <label htmlFor="password" className="label">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              className="input-field"
              placeholder="Enter your password"
              type={showEye ? "text" : "password"}
            />
            {showEye ? (
              <FaEye
                className="inputEye"
                onClick={() => setShowEye(!showEye)}
              />
            ) : (
              <PiEyeClosedBold
                className="inputEye"
                onClick={() => setShowEye(!showEye)}
              />
            )}
          </div>
          {/* ------- Password Error ---------- */}
          <p className="error">error</p>
          {/*--------- Login Button ------------  */}
          <button type="submit" className="button">
            Login
          </button>
        </form>

        {/* ---------- Form end -------- */}
        <p className="reg_text">
          Don't have an account?{" "}
          <span>
            <Link to={"/register/SignUp"}>SignUp</Link>
          </span>
        </p>
      </div>
      {/* xxxxxxxxxxxxxxxxxxxxxxxxx form container ends xxxxxxxxxxxxxxxxxxxxxx */}
    </div>
  );
};

export default LogIn;
