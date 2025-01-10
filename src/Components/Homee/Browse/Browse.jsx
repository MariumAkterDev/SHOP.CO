import React from "react";
import "./Browse.css";
import style1 from "../../../assets/images/style1.png";
import style2 from "../../../assets/images/style2.png";
import style3 from "../../../assets/images/style3.png";
import style4 from "../../../assets/images/style4.png";
import CommonBtnOne from "../../CommonBtnOne/CommonBtnOne";
import { Link } from "react-router-dom";

const Browse = () => {
  return (
    <>
      <div className="BrowseSection">
        <div className="container">
          <h2 className="browseH2 Title">BROWSE BY DRESS STYLE</h2>
          <div className="browseImgMenu">
            {/* ---------------------------Menu Starts--------------------- */}
            <div
              className="browseMen browseMenu1"
              style={{
                backgroundImage: `url(${style1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
             <Link to="">
             <div className="commonDiv">
                <button className="browseBtn">Casual</button>
              </div>
             </Link>
            </div>
            <div
              className="browseMen browseMenu2"
              style={{
                backgroundImage: `url(${style2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Link to="">
              <div className="commonDiv">
                <button className="browseBtn">Formal</button>
              </div>
              </Link>
            </div>
            <div
              className="browseMen browseMenu2"
              style={{
                backgroundImage: `url(${style3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
             <Link to="">
             <div className="commonDiv">
                <button className="browseBtn">Party</button>
              </div>
             </Link>
            </div>
            <div
              className="browseMen browseMenu1"
              style={{
                backgroundImage: `url(${style4})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Link to="">
              <div className="commonDiv">
                <button className="browseBtn">Gym</button>
              </div>
              </Link>
            </div>
            {/* xxxxxxxxxxxxxxxxxxx Menu Ends xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
