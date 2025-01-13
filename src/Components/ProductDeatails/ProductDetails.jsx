import React from 'react'
import './ProductDetails.css'
import minipik1 from '../../assets/images/pd1.png'
import minipik2 from '../../assets/images/pd2.png'
import minipik3 from '../../assets/images/pd3.png'
import bigpicture from '../../assets/images/bigpicture.png'
import { FaStar } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import SingleProduct from '../SingleProduct/SingleProduct'
import product1 from '../../assets/images/prodt1.png'
import product2 from '../../assets/images/prodt2.png'
import product3 from '../../assets/images/prodt3.png'
import product4 from '../../assets/images/prodt4.png'
import CommonBtnOne from '../CommonBtnOne/CommonBtnOne'

const ProductDetails = () => {
    return (
        <section>
          <div className="container">
            {/* -------------------------------------- Product Details Starts ---------------------------- */}
            <div className="main_deatails">
              <div className="ProductPicture">
                <div className="miniPicture">
                  <div className='miniParent'><img src={minipik1} alt="minipik" /></div>
                  <div className='miniParent'><img src={minipik2} alt="minipik" /></div>
                  <div className='miniParent'><img src={minipik3} alt="minipik" /></div>
                </div>
                <div className="bigPictur">
                  <img src={bigpicture} alt="big" />
                </div>
              </div>
                <div className="Product_text">
                  <h1 className='PHeade'>One Life Graphic T-shirt</h1>
                  <div className="pstar items-center">
                        <ul>
                          <li><FaStar /></li>
                          <li><FaStar /></li>
                          <li><FaStar /></li>
                          <li><FaStar /></li>
                          <li><FaStar /></li>
                        </ul>
                        <p className='starr'><span>4</span>/5</p>
                  </div>
                  <div className="product_rate ">
                    <div className="main_rate">
                      <p className='p1'>$260</p>
                      <p className='p2'>$300</p>
                    </div>
                    <button>-40%</button>
                  </div>
                  <div className="productDescription">
                    <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                  </div>
                  <div className='line1'></div>
                  <div className="productcolor ">
                    <p>Select Colors</p>
                    <button><IoMdCheckmark/></button>
                  </div>
                  <div className='line1'></div>
                  <div className="product_size ">
                    <p>Choose Size</p>
                    <div className="pbutton ">
                      <button className='pbutton_Size'>Small</button>
                      <button className='pbutton_Size'>Medium</button>
                      <button className='pbutton_Size'>Large</button>
                      <button className='pbutton_Size'>X-Large</button>
                    </div>
                  </div>
                  <div className='line1'></div>
                  <div className="add_button">
                    <div className="incre_decre">
                      <button>-</button>
                      <p>0</p>
                      <button>+</button>
                    </div>
                    <button className='addCartBtn'>Add to Cart</button>
                  </div>
    
                </div>
            </div>
            {/* xxxxxxxxxxxxxxxxxxxxxxxxx Product details ends xxxxxxxxxxxxxxxxxxxxxxxxxxx */}
            {/* ---------------------------- 2nd row -------------------------------- */}
            <div className="alsoLikeRow">
                <h2 className='Title alsoLikeRowH2'>You might also like</h2>
                <div className='alsoLikeImgs flex justify-between '>
                <SingleProduct prdctImg={product1} productName={'T-SHIRT'} latestPrice={'240'}/>
              <SingleProduct prdctImg={product2} productName={'SKINNY FIT JEANS'} latestPrice={'350'} />
              <SingleProduct prdctImg={product3} productName={'CHECKERED SHIRT'} latestPrice={'180'}  oldPrice={'$232'} discount={'-20%'} />
              <SingleProduct prdctImg={product4} productName={'SLEEVE STRIPED'} latestPrice={'220'} />
                </div>
                <div className='alsoLikeBtn'>
                <CommonBtnOne btn1Contnt={'View More'} linkAdd={'/shop'}/>
                </div>
            </div>

            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 2nd row ends xxxxxxxxxxxxxxxxxxxxxxxxxx */}
          </div>
        </section>
      )
}

export default ProductDetails