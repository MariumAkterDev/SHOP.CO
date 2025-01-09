import React from 'react'
import './New.css'
import SingleProduct from '../../SingleProduct/SingleProduct'

const New = () => {
  return (
    <>
      <div className="NewMother">
        <div className="container">
          <div className="newShow">
            <h2 className='newShowH2'>NEW ARRIVALS</h2>
            <div className="product_Row">
              <SingleProduct/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default New