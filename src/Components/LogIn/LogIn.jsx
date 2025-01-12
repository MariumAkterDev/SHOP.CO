import React, { useState } from "react";
import "./LogIn.css";
import logo from "../../assets/images/logo.png";
import { PiEyeClosedBold } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const LogIn = () => {
  // ======================================> useState part Starts
    const [showEye, setShowEye] = useState(false);
    const [formData, setFormData] = useState({email:'', password:''})
    const [error, setError] = useState({emailError:'' , passwordError:''})  
  
    // ========================================> Main Funtion Part
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(formData.email == ''){
      setError((prev)=>({...prev , emailError:'Please enter your email'}))
    }
    if(formData.password == ''){
      setError((prev)=>({...prev , passwordError:'Please enter your password'}))
    }
  }

  return (
    <div className="LogIn_Main" onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="reg_img">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <h5>Login</h5>
        {/* ------------------------ Form Start ------------------------- */}
        <form>
          {/*  -------------------------------------------------> Email part */}
          <div className="mb-4">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input-field"
              onChange={(e)=>{setFormData((prev)=>({...prev, email:e.target.value })), setError((prev)=>({...prev , emailError:''}))}}
            />
            {/*  Email Error ---------------------------------- */}
            <p className="error">{error.emailError}</p>
          </div>
          {/* ----------------------------------------------------------->  Password Part */}

          <label htmlFor="password" className="label">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              className="input-field"
              placeholder="Enter your password"
              type={showEye ? "text" : "password"}
              onChange={(e)=>{setFormData((prev)=>({...prev, password:e.target.value})), setError((prev)=>({...prev , passwordError:''}))}}
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
          <p className="error">{error.passwordError}</p>
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
