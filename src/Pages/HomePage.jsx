import React from 'react'
import Banner from '../Components/Homee/Banner/Banner'
import New from '../Components/Homee/NewArrival/New'
import Top from '../Components/Homee/TopSell/Top'
import Browse from '../Components/Homee/Browse/Browse'
import Review from '../Components/Homee/Reviewss/Review'
import Companies from '../Components/Homee/Companies/Companies'

const HomePage = () => {
  return (
    <>
      <Banner/>
      <Companies/>
      <New/>
      <Top/>
      <Browse/>
      <Review/>
    </>
  )
}

export default HomePage