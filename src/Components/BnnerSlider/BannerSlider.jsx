import React from 'react'
import './BannerSlider.css'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import bannerimg1 from '../../assets/images/banner-1.png'
import bannerimg2 from '../../assets/images/banner-2.png'
import bannerimg3 from '../../assets/images/banner-3.png'
import bannerimg4 from '../../assets/images/banner-4.png'
import bannerimg5 from '../../assets/images/banner-5.png'

const BannerSlider = () => {
    const fadeImages = [
        {
            url: bannerimg1 ,
        },
        {
            url: bannerimg2,
        },
        {
            url: bannerimg3,
        },
        {
            url: bannerimg4,
        },
        {
            url: bannerimg5,
        }
    ];
    const properties = {
        duration: 2000,
        transitionDuration: 500, 
        infinite: true, 
        indicators: false, 
        arrows: false
        
    }

    return (
        <>
            <div className="slide-container myBannerSlide">
                <Fade {...properties}>
                    {fadeImages.map((fadeImage, index) => (
                        <div key={index}>
                            <img style={{ width: '100%'}} src={fadeImage.url} />
                            <h2>{fadeImage.caption}</h2>
                        </div>
                    ))}
                </Fade>
            </div>
        </>

    )
}

export default BannerSlider