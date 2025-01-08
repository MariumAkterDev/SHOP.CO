import React from 'react'
import './Banner.css'
import CommonBtnOne from '../../CommonBtnOne/CommonBtnOne'
import CountUp from 'react-countup';

const Banner = () => {
  return (
    <div className="Banner">
      <div className="container">
        <div className="banner_Row">
          {/* -------------------------Banner Row 1------------------------------------ */}
          <div className="baanerRowOne flex justify-between items-center">
            <div className="bannerTxt ">
              <h1 className='bannerTxtH1'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p className='bannerTxtP'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <CommonBtnOne btn1Contnt={'Shop Now'}/>
              <div className="bannerCountPart">
                {/* ----------------------Banner Single Count-------------------------------------- */}
                <div className="bannerSingleCount">
                  <h2 className="bannerCountH2"><CountUp start={0} end={200} duration={4} />+</h2>
                  <p className="bannerCountP">International Brand</p>
                </div>

                <div className="bannerSingleCount">
                  <h2 className="bannerCountH2"><CountUp start={500} end={2000} duration={4} />+</h2>
                  <p className="bannerCountP">High-Quality Products</p>
                </div>

                <div className="bannerSingleCount !border-[0px]">
                  <h2 className="bannerCountH2"><CountUp start={1000} end={30000} duration={4} />+</h2>
                  <p className="bannerCountP">Happy Customers</p>
                </div>
                {/* xxxxxxxxxxxxxxxxxxxxx Banner Single Count xxxxxxxxxxxxxxxxxxxxxxx */}

              </div>
            </div>
            <div className="bannerImg w-[672px]">
              <marquee behavior="" direction="left">
                  <div className='flex'>
                  <img className='mr-[20px]' src="src/assets/images/banner-1.png" alt="" />
                  <img className='mr-[20px]' src="src/assets/images/banner-2.png" alt="" />
                  <img className='mr-[20px]' src="src/assets/images/banner-3.png" alt="" />
                  <img className='mr-[20px]' src="src/assets/images/banner-4.png" alt="" />
                  </div>
              </marquee>
            </div>
          </div>
          {/* -------------------------Banner Row 2------------------------------------ */}
          <div className="baanerRowTwo"></div>
        </div>
      </div>
    </div>
  )
}

export default Banner