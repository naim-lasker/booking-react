import React from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import Slider from "react-slick"
import SingleTopSlider from "../../../components/Public/News/SingleTopSlider"

const SlickButton = ({ currentSlide, slideCount, children, ...props }) => (
    <button {...props}>{children}</button>
)

const TopSlider = ({ text }) => {
    const settings = {
        arrows: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: 0,
        prevArrow: (
            <SlickButton>
                <FaAngleLeft />
            </SlickButton>
        ),
        nextArrow: (
            <SlickButton>
                <FaAngleRight />
            </SlickButton>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    const newsData = [
        {
            imgUrl: "/images/news/top-imag1.png",
            tag: "Tour & Travel",
            heading:
                "Nykaa So Matte Lipstick Taupe Thrill 12 Nykaa So Matte Taupe Thrill",
            date: "21",
            month: "Aug",
        },
        {
            imgUrl: "/images/news/top-imag1.png",
            tag: "Tour & Travel",
            heading:
                "Nykaa So Matte Lipstick Taupe Thrill 12 Nykaa So Matte Taupe Thrill",
            date: "21",
            month: "Aug",
        },
        {
            imgUrl: "/images/news/top-imag1.png",
            tag: "Tour & Travel",
            heading:
                "Nykaa So Matte Lipstick Taupe Thrill 12 Nykaa So Matte Taupe Thrill",
            date: "21",
            month: "Aug",
        },
        {
            imgUrl: "/images/news/top-imag1.png",
            tag: "Tour & Travel",
            heading:
                "Nykaa So Matte Lipstick Taupe Thrill 12 Nykaa So Matte Taupe Thrill",
            date: "21",
            month: "Aug",
        },
    ]

    return (
        <section className='news-top-carousel'>
            <Slider {...settings}>
                {newsData.length > 0 &&
                    newsData.map((news, index) => (
                        <SingleTopSlider key={index} news={news} />
                    ))}
            </Slider>
        </section>
    )
}

export default TopSlider
