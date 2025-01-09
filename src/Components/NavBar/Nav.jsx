import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaUserCircle, FaCartArrowDown, FaBars } from "react-icons/fa";


const Nav = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="NavFull">
        {/* --------------------------------Header-------------------------------------------- */}
        <div className="headerPart">
          <div className="headTxt">
            <p className="headTxtP">
              Sign up and get 20% off to your first order.
            </p>
            <Link className="headsignUp">Sign Up Now</Link>
          </div>
        </div>
        {/* -------------------------------------Nav----------------------------------------- */}
        <div className="container">
          <div className="NavRow">
            {/* ---------------------Mobile Nav Menu Starts -------- */}
            <div className="navMobBar">
              <FaBars className="mobBarIcon" onClick={() => setShow(!show)} />
              {show && (
                <div className="mobMenu">
                  <ul>
                    <li>
                      <Link>Shop</Link>
                    </li>
                    <li>
                      <Link>On Sale</Link>
                    </li>
                    <li>
                      <Link>New Arrivals</Link>
                    </li>
                    <li>
                      <Link>Top Selling</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* ---------------------Mobile Nav Menu Ends -------- */}
            <div className="logoCol">
              <Link>
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </div>
            
            <div className="navMenuCol">
              <ul>
                <li>
                  <Link>Shop</Link>
                </li>
                <li>
                  <Link>On Sale</Link>
                </li>
                <li>
                  <Link>New Arrivals</Link>
                </li>
                <li>
                  <Link>Top Selling</Link>
                </li>
              </ul>
            </div>
            <div className="menuIcon">
              <div className="navCartMain">
                <Link className="navCartIcon ">
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
                <Link className="navAccountIcon">
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
      </div>
    </>
  );
};

export default Nav;
