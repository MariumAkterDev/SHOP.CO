import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaUserCircle, FaCartArrowDown, FaBars } from "react-icons/fa";


const Nav = () => {
  const [show, setShow] = useState(false);
  const mobNavRef = useRef(null)

  const mobNavToggle = (e) => {
    if (e.target.contains(mobNavRef.current)) {
      setShow(false)
    }
  }

  console.log(show);
  useEffect(() => {
    document.addEventListener('mousedown', mobNavToggle)
  }, [])

  return (
    <>
      <section className="NavFull">
        {/* --------------------------------Header-------------------------------------------- */}
        <div className="headerPart">
          <div className="headTxt">
            <p className="headTxtP">
              Sign up and get 20% off to your first order.
            </p>
            <Link to='/register/SignUp' className="headsignUp">Sign Up Now</Link>
          </div>
        </div>
        {/* -------------------------------------Nav----------------------------------------- */}
        <div className="container">
          <div className="NavRow">
            {/* ----------------------------------Mobile Nav Menu Starts -------------------------- */}
          
              <div className="navMobBar" ref={mobNavRef} >
                <FaBars className="mobBarIcon " onClick={() => setShow(!show)} />
                {show && (
                  <div className="mobMenu" onClick={() => setShow(false)}>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Shop</Link>
                      </li>
                      <li>
                        <Link to='/shop'>New Arrivals</Link>
                      </li>
                      <li>
                        <Link to='/contact'>Contact</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
           
            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Mobile Nav Menu Ends xxxxxxxxxxxxxxxxxxxxxxxxxx */}
            <div className="logoCol">
              <Link to='/' >
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </div>

            <div className="navMenuCol">
              <ul>
                <li>
                  <Link to='/' >Home</Link>
                </li>
                <li>
                  <Link to='/shop' >Shop</Link>
                </li>
                <li>
                  <Link to='' >New Arrivals</Link>
                </li>
                <li>
                  <Link to='/contact' >Contact</Link>
                </li>
              </ul>
            </div>
            <div className="menuIcon">
              <div className="navCartMain">
                <Link to='/cart' className="navCartIcon ">
                  <FaCartArrowDown />
                </Link>
                {/* -------------------------------NavCartPopUp starts------------------------ */}
                <div className="navCartPop">
                  <div className="shoppingCart">
                    <p className="shoppingCartP">Shopping Cart</p>
                    <div className="cartBgChild"></div>
                  </div>
                </div>
                {/* -------------------------------NavCartPopUp Ends------------------------ */}
                <div className="navCartBadge">
                  <h6>0</h6>
                </div>
              </div>

              <div className="navAccountMain">
                <Link to='/register/LogIn' className="navAccountIcon">
                  <FaUserCircle />
                </Link>
                {/* -------------------------------NavAccountPopUp starts------------------------ */}
                <div className="navAccountPop">
                  <div className="shoppingCart">
                    <p className="shoppingCartP">Account</p>
                    <div className="cartBgChild"></div>
                  </div>
                </div>
                {/* -------------------------------NavAccountPopUp Ends------------------------ */}
              </div>
            </div>
          </div>
        </div>
        {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx NavBar Ends xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
      </section>
    </>
  );
};

export default Nav;
