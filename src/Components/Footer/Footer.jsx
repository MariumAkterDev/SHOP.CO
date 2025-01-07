import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import footerImg1 from '../../assets/images/Badge.png'
import footerImg2 from '../../assets/images/Badge (1).png'
import footerImg3 from '../../assets/images/Badge (2).png'
import footerImg4 from '../../assets/images/Badge (3).png'
import footerImg5 from '../../assets/images/Badge (4).png'





const Footer = () => {
  return (
    <>
      {/* --------------------------------SubsCribe Part------------------------------ */}
      <div className="container mySubsCont">
        <div className="SubscribePart ">
          <div className="subsTxt">
            <h2 className='subsTxtH2'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
          </div>
          <div className="subsInpPart relative">
            <input type="email" placeholder='@ Enter your email address' className='subs_Inp' />
            <button className='subs_Btn'>Subscribe</button>
          </div>
        </div>
      </div>
      {/* -----------------------------------Footer Part------------------------------ */}
      <div className="Footer">
        <div className="container">
          <div className="footer_Row">
            {/* ----------------------------------Footer Row 1---------------------------------------- */}
            <div className="footerRow1">
              {/* --------------------------------Footer Col 1------------------------------------ */}
              <div className="footerCol1">
                <img src={footerLogo} alt="logo" className='footerLogo' />
                <p className='footerP'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className="footer_Icon">
                  <ul>
                    <li><Link><FaTwitter /></Link></li>
                    <li><Link><FaFacebookF /></Link></li>
                    <li><Link><FaInstagram /></Link></li>
                    <li><Link><FaGithub /></Link></li>
                  </ul>
                </div>
              </div>
              {/* --------------------------------Footer Col 2------------------------------------ */}
              <div className="footerMenu">
                <h2 className='footerMenuH2'>Company</h2>
                <div className='footerMenuItems'>
                  <Link to="" className='footerSingMenu'>About</Link>
                  <Link to="" className='footerSingMenu'>Features</Link>
                  <Link to="" className='footerSingMenu'>Works</Link>
                  <Link to="" className='footerSingMenu'>Career</Link>
                </div>
              </div>
              {/* --------------------------------Footer Col 3------------------------------------ */}
              <div className="footerMenu">
                <h2 className='footerMenuH2'>Help</h2>
                <div className='footerMenuItems'>
                  <Link to="" className='footerSingMenu'>Customer Support</Link>
                  <Link to="" className='footerSingMenu'>Delivery Details</Link>
                  <Link to="" className='footerSingMenu'>Terms & Conditions</Link>
                  <Link to="" className='footerSingMenu'>Privacy Policy</Link>
                </div>
              </div>
              {/* --------------------------------Footer Col 4------------------------------------ */}
              <div className="footerMenu">
                <h2 className='footerMenuH2'>FAQ</h2>
                <div className='footerMenuItems'>
                  <Link to="" className='footerSingMenu'>Account</Link>
                  <Link to="" className='footerSingMenu'>Manage Deliveries</Link>
                  <Link to="" className='footerSingMenu'>Orders</Link>
                  <Link to="" className='footerSingMenu'>Payments</Link>
                </div>
              </div>
              {/* --------------------------------Footer Col 5------------------------------------ */}
              <div className="footerMenu">
                <h2 className='footerMenuH2'>Resources</h2>
                <div className='footerMenuItems'>
                  <Link to="" className='footerSingMenu'>Free eBooks</Link>
                  <Link to="" className='footerSingMenu'>Development Tutorial</Link>
                  <Link to="" className='footerSingMenu'>How to - Blog</Link>
                  <Link to="" className='footerSingMenu'>Youtube Playlist</Link>
                </div>
              </div>
              {/* --------------------------------------------Footer menu ends----------------------------- */}
            </div>
            <div className="footerRow2"></div>
            {/* ----------------------------------Footer Row 3---------------------------------------- */}
            <div className="footerRow3">
              <p className="footerRow3Txt">
                Shop.co © 2000-2023, All Rights Reserved
              </p>
              <div className="footerRow3Img">
                <img src={footerImg1} alt="img" />
                <img src={footerImg2} alt="img" />
                <img src={footerImg3} alt="img" />
                <img src={footerImg4} alt="img" />
                <img src={footerImg5} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer