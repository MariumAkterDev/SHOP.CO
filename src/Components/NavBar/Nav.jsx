import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaUserCircle, FaCartArrowDown, FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../Slice/userSlice";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [showLog, setShowLog] = useState(false)
  const mobNavRef = useRef(null)
  // ===================================> variables for navigation and redux
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // ==================================>taking Redux data 
  const sliceUser = useSelector((state) => state.currentUser.value)
 

  const mobNavToggle = (e) => {
    if (e.target.contains(mobNavRef.current)) {
      setShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', mobNavToggle)
  }, [])

  const handleLogOut = () => {
    navigate('/')
    localStorage.removeItem('currrentUser')
    dispatch(userData(null))
  }

  return (
    <>
      <section className="NavFull">
        {/* --------------------------------Header-------------------------------------------- */}
        <div className="headerPart">
          <div className="headTxt">
            <p className="headTxtP">
              Sign up and get 20% off to your first order.
            </p>
            <Link to="/register/SignUp" className="headsignUp">
              Sign Up Now
            </Link>
          </div>
        </div>
        {/* -------------------------------------Nav----------------------------------------- */}
        <div className="container">
          <div className="NavRow">
            {/* ----------------------------------Mobile Nav Menu Starts -------------------------- */}

            <div className="navMobBar" ref={mobNavRef}>
              <FaBars className="mobBarIcon " onClick={() => setShow(!show)} />
              {show && (
                <div className="mobMenu" onClick={() => setShow(false)}>
                  <ul>
                    <li>
                      <Link to="/" >Home</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/shop">New Arrivals</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Mobile Nav Menu Ends xxxxxxxxxxxxxxxxxxxxxxxxxx */}
            <div className="logoCol">
              <Link to="/">
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </div>

            <div className="navMenuCol">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="">New Arrivals</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="menuIcon">
              <div className="navCartMain">
                <Link to="/cart" className="navCartIcon ">
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

              {/* ^^^^^^^^^^^^^^^^^----------- for log out users starts ------------------xxxxxxxxxxxxxxxxxxxxxxxxxxx */}
              <div div className={`navAccountMain ${sliceUser ? 'hidden' : 'block'} `}>
                {/* ${sliceUser.emailVerified ? 'hidden' : 'block'} */}
                <Link to="/register/LogIn" className="navAccountIcon">
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
              {/* xxxxxxxxxxxxxxxxxx----------- for log out users ends ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxx */}
              {/* ^^^^^^^^^^^^^^^^^^----------- for log in users starts --------------------xxxxxxxxxxxxxxxxxxxxxxxxxxx */}
              <div className={`navAccountLogIn ${sliceUser ? 'block' : 'hidden'} `}>
                {/* ${sliceUser.emailVerified ? 'block' : 'hidden'} */}
                <div className="navAccountMain  flex" onClick={() => setShowLog(!showLog)}>
                  <Link to="" className="navAccountIcon">
                    <FaUserCircle />
                  </Link>
                  <button className="userAccntDownArrow">
                    <MdKeyboardArrowDown className="" />
                  </button>

                  {/* -------------------------------NavAccountPopUp starts------------------------ */}
                  <div className="navAccountPop">
                    <div className="shoppingCart">
                      <p className="shoppingCartP">Account</p>
                      <div className="cartBgChild"></div>
                    </div>
                  </div>
                  {/* -------------------------------NavAccountPopUp Ends------------------------ */}
                </div>

                {/* ===================== Log Out Button starts ========================== */}
                {
                  showLog &&
                  <div className="logOutMainDv">
                    <button
                      type="submit"
                      className="accountDropClass1  group "
                      onClick={handleLogOut}
                    >
                      Log Out
                      <BsArrowUpRightCircle className="accountDropClass2 " />
                      

                    </button>
                  </div>

                }
                {/* ===================== Log Out button Ends ================================ */}


              </div>

              {/* xxxxxxxxxxxxxxxxxx----------- for log in users ends ------------------xxxxxxxxxxxxxxxxxxxxxxxxxxx */}
            </div>
          </div>
        </div>
        {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx NavBar Ends xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
      </section >
    </>
  );
};

export default Nav;

{/* <path
  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
  className="accountDropClass3 group-hover:fill-gray-800"
  ></path> */}
