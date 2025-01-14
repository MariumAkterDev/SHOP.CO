import React from 'react'
import './Bill.css'
import { FaHandshake } from 'react-icons/fa'

const Bill = () => {
  return (
    <>
        <div className="container">
            <div className="main_bill pt-[50px] pb-[100px]">
                <div className="Bill_information flex gap-[150px] flex-wrap sm:justify-center">
                    <div className="hum">
                        <h1 className='Title'>Billing details</h1>
                        <div className="main_info">
                            <div className="one">
                                <h2>Name</h2>
                                <input type="text" className='name' placeholder='Your name!' />
                            </div>
                            <div className="Tow">
                                <h2>Company Name (Optional)</h2>
                                <input type="text" className='name'  />
                            </div>
                            <div className="Tow">
                                <h2>Country / Region</h2>
                                <input type="text" className='name' placeholder='Bangladesh' />
                            </div>
                            <div className="Tow">
                                <h2>Street address</h2>
                                <input type="text" className='name'  />
                            </div>
                            <div className="Tow">
                                <h2>Town / City</h2>
                                <input type="text" className='name'  />
                            </div>
                            <div className="Tow">
                                <h2>Province</h2>
                                <input type="text" className='name'  />
                            </div>
                            <div className="Tow">
                                <h2>ZIP code</h2>
                                <input type="text" className='name'  />
                            </div>
                            <div className="Tow">
                                <h2>Phone</h2>
                                <input type="text" className='name'  />
                            </div>
                            <div className="Tow">
                                <h2>Email address</h2>
                                <input type="text" className='name'  />
                            </div>
                            <div className="Tow">
                                <h2>Additional information</h2>
                                <input type="text" className='name' placeholder='Additional information' />
                            </div>
                        </div>
                    </div>
                    <div className="Bill_product_details">
                        <div className="main_text">
                            <h2>Product</h2>
                            <h2>Subtotal</h2>
                        </div>
                        <div className="main_text2">
                            <h3>Asgaard sofa</h3>
                            <h3>Rs. 250,000.00</h3>
                        </div>
                        <div className="main_text3">
                            <h2>Subtotal</h2>
                            <h3>Rs. 250,000.00</h3>
                        </div>
                        <div className="main_text4">
                            <h2>Total</h2>
                            <h3>Rs. 250,000.00</h3>
                        </div>
                        <hr className='mt-[33px]'/>
                        <div className="payment_methood">
                            <h2>Payment Method</h2>
                            <div className="Pm">
                                <input type="checkbox" className='box1' />   
                                <FaHandshake className='shake'/>
                                <h2>Cash On Delivery</h2>
                            </div>
                        </div>
                        <div className="order_button">
                            <button>Place order</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Bill