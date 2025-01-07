import React from 'react'
import Banner from '../Components/Homee/Banner/Banner'
import New from '../Components/Homee/NewArrival/New'
import Top from '../Components/Homee/TopSell/Top'
import Browse from '../Components/Homee/Browse/Browse'
import Review from '../Components/Homee/Reviewss/Review'
import Subscribe from '../Components/Subscribe/Subscribe'
import Footer from '../Components/Footer/Footer'

const HomePage = () => {
  return (
    <>
      <Banner/>
      <New/>
      <Top/>
      <Browse/>
      <Review/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default HomePage