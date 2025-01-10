import React from 'react'
import './Review.css'
import ReviewSlider from '../../ReviewSlider/ReviewSlider'

const Review = () => {
  return (
    <>
      <div className="ReviewSection">
        <div className="container">
          <div className="reviewRow">
            <h2 className='Title reviewRowH2'>OUR HAPPY CUSTOMERS</h2>
            <ReviewSlider/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review