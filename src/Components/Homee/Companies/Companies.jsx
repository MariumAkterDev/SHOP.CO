import React from 'react'
import './Companies.css'
import company1 from '../../../assets/images/company1.png'
import company2 from '../../../assets/images/company2.png'
import company3 from '../../../assets/images/company3.png'
import company4 from '../../../assets/images/company4.png'
import company5 from '../../../assets/images/company5.png'

const Companies = () => {
  return (
    <>
        <div className="CompanyLogo">
            <div className="container">
                <div className="companyRow">
                    
                        <div className='companyName'><img src={company1} alt="company" /></div>
                        <div className='companyName'><img src={company2} alt="company" /></div>
                        <div className='companyName'><img src={company3} alt="company" /></div>
                        <div className='companyName'><img src={company4} alt="company" /></div>
                        <div className='companyName'><img src={company5} alt="company" /></div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Companies