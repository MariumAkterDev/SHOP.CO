import React from 'react'
import './Breadcrumb.css'
import { Link, useLocation } from 'react-router-dom'
import { IoChevronForward } from "react-icons/io5";


const Breadcrumb = () => {

    const location = useLocation()
    const path = location.pathname.split('/')[1]
    
    


  return (
    <>
        <section className="Breadcrumb">
            <div className="container">
                <div className="bread_Row">
                    <ul>
                        <li><Link to='/' className='text-[10px] md:text-[16px] text-lightColor-2C font-poppins font-normal' >Home</Link></li>
                        <li className='text-[#000] text-[12px]  md:text-[16px] mt-[2px]'><IoChevronForward/></li>
                        <li><Link to='/shop'className='text-[10px] md:text-[18px] text-[#000] font-poppins font-normal' >{path}</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Breadcrumb