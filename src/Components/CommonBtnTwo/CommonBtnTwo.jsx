import React from 'react'
import './CommonBtnTwo.css'
import { Link } from 'react-router-dom'

const CommonBtnTwo = ({btn2Contnt, linkAdd}) => {
  return (
    <button className={`commonBtn2`} ><Link to={linkAdd}>{btn2Contnt}</Link></button>
  )
}

export default CommonBtnTwo