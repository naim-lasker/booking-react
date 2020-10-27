import React from "react"
import Slider from "react-slick"

const StoreBanner = () => {
    const settings = {
        arrows: false,
        dots: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const bannerData = [
        {
            id: 1,
            imgUrl: "/images/services/banner.png",
        },
        {
            id: 2,
            imgUrl: "/images/services/banner.png",
        },
        {
            id: 3,
            imgUrl: "/images/services/banner.png",
        },
        {
            id: 4,
            imgUrl: "/images/services/banner.png",
        },
    ]

    return (
        <div className='service-banner-area'>
            <Slider {...settings}>
                {bannerData.length > 0 &&
                    bannerData.map((banner, index) => (
                        <div className='service-banner-img' key={index}>
                            <img className='w-100' src={banner.imgUrl} alt='' />
                        </div>
                    ))}
            </Slider>
        </div>
    )
}

export default StoreBanner
