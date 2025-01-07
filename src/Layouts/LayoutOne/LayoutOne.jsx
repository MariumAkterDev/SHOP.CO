import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../Components/NavBar/Nav'

const LayoutOne = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default LayoutOne