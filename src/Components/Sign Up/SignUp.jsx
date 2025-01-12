import React from 'react'
import '../LogIn/LogIn.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const SignUp = () => {
  return (
    <div className="LogIn_Main">
      <div className="form-container">
        <div className="reg_img">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <h5>Sign Up</h5>
        {/* ------------------------ Form Start ------------------------- */}
        <form>
          {/*  ------------------------ User Name part ----------------------- */}
          <div className="mb-4">
            <label htmlFor="email" className="label">
              UserName
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your user name"
              className="input-field"
            />
            {/*  UserName Error ---------------------------------- */}
            <p className="error">error</p>
          </div>
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
            />
          </div>
          {/* ------- Password Error ---------- */}
          <p className="error">error</p>
          {/*--------- Login Button ------------  */}
          <button type="submit" className="button">
            Sign Up
          </button>
        </form>

        {/* ---------- Form end -------- */}
        <p className="reg_text">
          Don't have an account?{" "}
          <span>
            <Link to={"/register/LogIn"}>Log In</Link>
          </span>
        </p>
      </div>
      {/* xxxxxxxxxxxxxxxxxxxxxxxxx form container ends xxxxxxxxxxxxxxxxxxxxxx */}
    </div>
  );
}

export default SignUp