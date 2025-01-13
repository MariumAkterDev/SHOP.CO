import React, { useState } from 'react'
import '../LogIn/LogIn.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Bounce, toast } from 'react-toastify';


const SignUp = () => {
  // ======================================> useState part Starts
  const [formData, setFormData] = useState({ userName: '', email: '', password: '' })
  const [error, setError] = useState({ userError: '', emailError: '', passwordError: '' })

  // ===========================================> Firebase variables
  const auth = getAuth();
  // =========================> Navigation Variable
  const navigate = useNavigate()

  // ========================================> Main Funtion Part
  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.userName == '') {
      setError((prev) => ({ ...prev, userError: 'Please enter your username' }))
    }
    if (formData.email == '') {
      setError((prev) => ({ ...prev, emailError: 'Please enter your email' }))
    }
    if (formData.password == '') {
      setError((prev) => ({ ...prev, passwordError: 'Please enter your password' }))
    } else {
      // ==================$$$$$$$$$$$$$$$$==========> Sign up authentication of firebase of  email and password starts
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          
          // ===========================================> Email Varification 
          sendEmailVerification(auth.currentUser)
            .then(() => {
              // ==================================> Email varification Toast
              toast.info('Email verification sent', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });
              // -----------------------------> Navigate to log in page
              navigate ('/register/LogIn')
            });
        })
        // ===============================================> error while Signing Up
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode == 'auth/email-already-in-use') {
            // ============================================> Same email error toast
            toast.warning('Email already in use', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          }

          if (errorCode == 'auth/weak-password') {
            // ============================================> Weak password toast
            toast.warning('Password should be at least 6 characters', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          }
          // ==================================================================>  catch end below
        });
    }

  }



  // ===========================================================> jsx part ============================================>
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
          {/*  ------------------------------------------------------------------> User Name part  */}
          <div className="mb-4">
            <label htmlFor="email" className="label">
              UserName
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your user name"
              className="input-field"
              onChange={(e) => { setFormData((prev) => ({ ...prev, userName: e.target.value })), setError((prev) => ({ ...prev, userError: '' })) }}
            />
            {/*  UserName Error ---------------------------------- */}
            <p className="error">{error.userError}</p>
          </div>
          {/*  -------------------------------------------------------------------> Email part  */}
          <div className="mb-4">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input-field"
              onChange={(e) => { setFormData((prev) => ({ ...prev, email: e.target.value })), setError((prev) => ({ ...prev, emailError: '' })) }}
            />
            {/*  Email Error ---------------------------------- */}
            <p className="error">{error.emailError}</p>
          </div>
          {/* ------------------------------------------------------------------------------>  Password Part */}

          <label htmlFor="password" className="label">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              className="input-field"
              placeholder="Enter your password"
              onChange={(e) => { setFormData((prev) => ({ ...prev, password: e.target.value })), setError((prev) => ({ ...prev, passwordError: '' })) }}
            />
          </div>
          {/* ------- Password Error ---------- */}
          <p className="error">{error.passwordError}</p>
          {/*--------- Login Button ------------  */}
          <button type="submit" className="button" onClick={handleSubmit}>
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