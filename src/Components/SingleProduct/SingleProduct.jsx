import React from 'react'
import './SingleProduct.css'
import { FaStar } from "react-icons/fa";


const SingleProduct = ({prdctImg, }) => {
  return (
    <div className='singProductCard'>
        <img src={prdctImg} alt="" className='signlPrdctImg' />
        <h4 className='prodtName'>T-SHIRT WITH TAPE DETAILS</h4>
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
            <h3 className='prodtPriceH3'>$240</h3>
            <div className='prodtOldPrice'>
                <h3 className='prodtOldPriceH3'>$260</h3>
                <h4 className='prodtOldPriceH4'> -20%</h4> 
            </div>
        </div>

    </div>
  )
}

export default SingleProduct