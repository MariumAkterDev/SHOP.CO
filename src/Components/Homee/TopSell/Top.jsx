import React from 'react'
import './Top.css'
import SingleProduct from '../../SingleProduct/SingleProduct'
import top1 from '../../../assets/images/top1.png'
import top2 from '../../../assets/images/top2.png'
import top3 from '../../../assets/images/top3.png'
import top4 from '../../../assets/images/top4.png'
import CommonBtnTwo from '../../CommonBtnTwo/CommonBtnTwo'

const Top = () => {
  return (
    <>
      <section className="TopMother">
        <div className="container">
          <div className="topShow">
            <h2 className='Title text-center'>TOP SELLING</h2>
            <div className="Topproduct_Row">
              <SingleProduct prdctImg={top1} productName={'COURAGE GRAPHIC'} latestPrice={'212'} oldPrice={'$232'} discount={'-20%'} />
              <SingleProduct prdctImg={top2} productName={'BERMUDA SHORTS'} latestPrice={'145'} />
              <SingleProduct prdctImg={top3} productName={'STRIPED SHIRT'} latestPrice={'80'} oldPrice={'$150'} discount={'-15%'} />
              <SingleProduct prdctImg={top4} productName={'SKINNY JEANS'} latestPrice={'210'} />
            </div>
            <div className="top_Btn">
              {/* <CommonBtnOne btn1Contnt={'View All'} design={'!bg-[#fff] !text-[#18443F]'} hovereffect={'hover:bg-[#18443F] hover:text-[#fff]'}  linkAdd={'https://www.facebook.com/'}/> */}
              <CommonBtnTwo btn2Contnt={'View All'} linkAdd={'/shop'} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Top