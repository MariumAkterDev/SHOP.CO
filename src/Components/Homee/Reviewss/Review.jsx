import React from 'react'
import './Review.css'
import ReviewSlider from '../../ReviewSlider/ReviewSlider'

const Review = () => {
  return (
    <>
      <section className="ReviewSection">
        <div className="container">
          <div className="reviewRow">
            <h2 className='Title reviewRowH2'>OUR HAPPY CUSTOMERS</h2>
            <ReviewSlider/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Review