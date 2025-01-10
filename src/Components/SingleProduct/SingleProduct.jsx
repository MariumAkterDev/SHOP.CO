import React from 'react'
import './SingleProduct.css'
import { FaStar } from "react-icons/fa";


const SingleProduct = ({prdctImg,productName,latestPrice,oldPrice,discount }) => {
  return (
    <div className='singProductCard'>
        <img src={prdctImg} alt="" className='signlPrdctImg' />
        <h4 className='prodtName'>{productName}</h4>
        <div className="star">
            <ul>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
            </ul>
            <p className='starP'><span>4</span>/5</p>
        </div>
        <div className='prodtPrice'>
            <h3 className='prodtPriceH3'>${latestPrice}</h3>
            <div className='prodtOldPrice'>
                <h3 className='prodtOldPriceH3'>{oldPrice}</h3>
                <h4 className='prodtOldPriceH4'>{discount}</h4> 
            </div>
        </div>

    </div>
  )
}

export default SingleProduct