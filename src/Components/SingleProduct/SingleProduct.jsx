import React from "react";
import "./SingleProduct.css";
import { FaStar } from "react-icons/fa";

const SingleProduct = ({
    prdctImg,
    productName,
    latestPrice,
    oldPrice,
    discount,
}) => {
    return (
        <div className="singProductCard">
            <div className="singProductCard_Img">
                <img src={prdctImg} alt="" className="signlPrdctImg" />
                <div className="add_cart_div">
                    <button className="addCart_Btn">
                        Add Cart
                    </button>
                </div>
            </div>

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
                </div>
                <button className="resAddCartBtn" >Add Cart</button>
                
            </div>
        </div>
    );
};

export default SingleProduct;
