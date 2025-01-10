import React from 'react'
import './CommonBtnOne.css'
import { Link } from 'react-router-dom'

const CommonBtnOne = ({btn1Contnt,design, hovereffect, linkAdd}) => {
  return (
    <>
        <button className={`commonBtn1 ${hovereffect} ${design}`} ><Link to={linkAdd}>{btn1Contnt}</Link></button>
    </>
  )
}

export default CommonBtnOne