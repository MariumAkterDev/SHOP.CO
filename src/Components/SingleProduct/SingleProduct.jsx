import React from "react";
import "./SingleProduct.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleProduct = ({
    prdctImg,
    productName,
    latestPrice,
    oldPrice,
    discount,
    singlePrdctLink
}) => {
    return (
        <div className="singProductCard">
            {/* ======================================Card Main Img Portion ========================= */}
            <div className="singProductCard_Img">
                    <img src={prdctImg} alt="" className="signlPrdctImg" />
                <div className="add_cart_div">
                    <button className="addCart_Btn">
                        Add Cart
                    </button>
                </div>
            </div>
            {/* ==================================Caard Text Portion ================================= */}
            <Link to={singlePrdctLink}>
                <div className="prodctCard_detail relative">
                    <h4 className="prodtName">{productName}</h4>
                    <div className="star">
                        <ul>
                            <li>
                                <FaStar />
                            </li>
                            <li>
                                <FaStar />
                            </li>
                            <li>
                                <FaStar />
                            </li>
                            <li>
                                <FaStar />
                            </li>
                            <li>
                                <FaStar />
                            </li>
                        </ul>
                        <p className="starP">
                            <span>4</span>/5
                        </p>
                    </div>
                    <div className="prodtPrice">
                        <h3 className="prodtPriceH3">${latestPrice}</h3>
                        <div className="prodtOldPrice">
                            <h3 className="prodtOldPriceH3">{oldPrice}</h3>
                            <h4 className="prodtOldPriceH4">{discount}</h4>
                        </div>
                    {/* ------------------------ add to cart button for default to md ----------------------- */}
                    <button className="resAddCartBtn" >Add Cart</button>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default SingleProduct;
