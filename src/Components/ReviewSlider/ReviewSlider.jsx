import React from "react";
import "./ReviewSlider.css";
import ReviewSingleCard from "../ReviewSingleCard/ReviewSingleCard";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import review1 from '../../assets/images/review1.png'
import review2 from '../../assets/images/review2.png'
import review3 from '../../assets/images/review3.png'
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";


const ReviewSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <IoIosArrowForward/>,
    prevArrow: <IoIosArrowBack/>,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container myReviewSlider">
      <Slider {...settings}>
        <div>
          <ReviewSingleCard reviwImg={review1}/>
        </div>
        <div>
        <ReviewSingleCard reviwImg={review2}/>
        </div>
        <div>
        <ReviewSingleCard reviwImg={review3}/>
        </div>
        <div>
        <ReviewSingleCard reviwImg={review1}/>
        </div>
        <div>
        <ReviewSingleCard reviwImg={review2}/>
        </div>
        <div>
        <ReviewSingleCard reviwImg={review3}/>
        </div>
        <div>
        <ReviewSingleCard reviwImg={review1}/>
        </div>
        <div>
        <ReviewSingleCard reviwImg={review2}/>
        </div>
      </Slider>
    </div>
  );
};

export default ReviewSlider;
