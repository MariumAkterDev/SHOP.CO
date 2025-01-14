import React from 'react'
import './Cart.css'
import cart1 from '../../assets/images/cart1.png'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { GoTag } from 'react-icons/go'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

  const count = useSelector(state => state.count.value)
  const dispatch = useDispatch()

  console.log(count)

  return (
    <section>
      <div className="container">
        <div className="main_cart">
          <div className="cart_head flex flex-wrap ">
            <h1 className='Title md:ml-[30px]'>Your cart</h1>
          </div>
          <div className="main_details flex gap-[20px] flex-wrap sm:justify-center">
            <div className="Cart_details">
              <div className="cart_product">
                <div className="cart_img"><img src={cart1} alt="" /></div>
                <div className="cart_text">
                  <div className="cart_head_text">
                    <h2>Gradient Graphic T-shirt</h2>
                    <RiDeleteBin6Fill className='bin  cursor-pointer' />
                  </div>
                  <h3>Size: <span>Large</span></h3>
                  <h3>Color: <span>White</span></h3>
                  <div className="cart_count">
                    <h4>$145</h4>
                    <div className='count'>
                      <div className="incre_decre">
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className='mt-[24px] mb-[24px]' />
              <div className="cart_product">
                <div className="cart_img"><img src={cart1} alt="" /></div>
                <div className="cart_text">
                  <div className="cart_head_text">
                    <h2>Gradient Graphic T-shirt</h2>
                    <RiDeleteBin6Fill className='bin  cursor-pointer' />
                  </div>
                  <h3>Size: <span>Large</span></h3>
                  <h3>Color: <span>White</span></h3>
                  <div className="cart_count">
                    <h4>$145</h4>
                    <div className='count'>
                      <div className="incre_decre">
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className='mt-[24px] mb-[24px]' />
              <div className="cart_product">
                <div className="cart_img"><img src={cart1} alt="" /></div>
                <div className="cart_text">
                  <div className="cart_head_text">
                    <h2>Gradient Graphic T-shirt</h2>
                    <RiDeleteBin6Fill className='bin  cursor-pointer' />
                  </div>
                  <h3>Size: <span>Large</span></h3>
                  <h3>Color: <span>White</span></h3>
                  <div className="cart_count">
                    <h4>$145</h4>
                    <div className='count'>
                      <div className="incre_decre">
                        <button  onClick={() => dispatch(decrement())} >-</button>
                        <p>{count}</p>
                        <button onClick={() => dispatch(increment())} >+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order_summery">
              <div className="summery_text">
                <h2>Order Summary</h2>
                <div className="subtotal">
                  <h3>Subtotal</h3> <p>$565</p>
                </div>
                <div className="Discount ">
                  <h3>Discount (-20%)</h3> <p>-$113</p>
                </div>
                <div className="Delivery ">
                  <h3>Delivery Fee</h3> <p>$15</p>
                </div>
                <hr />
                <div className="Total ">
                  <h3>Total</h3> <p>$467</p>
                </div>
              </div>
              <div className="summery_buttons">
                <input type="text" placeholder='Add promo code' />
                {/* <GoTag className='Picon'/> */}
                <button>Apply</button>
              </div>
              <div className="Checkout_button">
                <Link to={'/checkOut'} >
                  <button>Go to Checkout <FaArrowRight /></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart