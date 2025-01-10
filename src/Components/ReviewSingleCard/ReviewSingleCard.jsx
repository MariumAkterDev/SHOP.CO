import React from 'react'
import './ReviewSingleCard.css'

const ReviewSingleCard = ({reviwImg}) => {
  return (
    <>
        <div className="reviewSinglCard">
            <img src={reviwImg} alt="" />
        </div>
    </>
  )
}

export default ReviewSingleCard