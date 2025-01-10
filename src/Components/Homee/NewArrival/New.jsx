import React from 'react'
import './New.css'
import SingleProduct from '../../SingleProduct/SingleProduct'
import product1 from '../../../assets/images/prodt1.png'
import product2 from '../../../assets/images/prodt2.png'
import product3 from '../../../assets/images/prodt3.png'
import product4 from '../../../assets/images/prodt4.png'
import CommonBtnOne from '../../CommonBtnOne/CommonBtnOne'
import CommonBtnTwo from '../../CommonBtnTwo/CommonBtnTwo'

const New = () => {
  return (
    <>
      <div className="NewMother">
        <div className="container">
          <div className="newShow">
            <h2 className='Title text-center'>NEW ARRIVALS</h2>
            <div className="product_Row">
              <SingleProduct prdctImg={product1} productName={'T-SHIRT'} latestPrice={'240'} />
              <SingleProduct prdctImg={product2} productName={'SKINNY FIT JEANS'} latestPrice={'350'} />
              <SingleProduct prdctImg={product3} productName={'CHECKERED SHIRT'} latestPrice={'180'} />
              <SingleProduct prdctImg={product4} productName={'SLEEVE STRIPED'} latestPrice={'220'} />
            </div>
            <div className="new_Btn">
              {/* <CommonBtnOne btn1Contnt={'View All'} design={'!bg-[#fff] !text-[#18443F]'} hovereffect={'hover:bg-[#18443F] hover:text-[#fff]'}  linkAdd={'https://www.facebook.com/'}/> */}
              <CommonBtnTwo btn2Contnt={'View All'} linkAdd={'https://www.facebook.com/'} />
            </div>
            <div className='newPartBtom' ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default New