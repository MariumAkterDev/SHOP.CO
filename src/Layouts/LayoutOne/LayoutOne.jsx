import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../Components/NavBar/Nav'
import Footer from '../../Components/Footer/Footer'

const LayoutOne = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default LayoutOne