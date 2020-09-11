import React from "react"
import Slider from "react-slick"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import SingleCategory from "../../../components/Home/SingleCategory"

const SlickButton = ({ currentSlide, slideCount, children, ...props }) => (
    <button {...props}>{children}</button>
)

export default () => {
    const settings = {
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: 30,
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
    const categoryData = [
        {
            id: 1,
            heading: "Tour & travel",
            imgUrl: "/images/categories/tour-travel.png",
            info:
                "There are many variations of passages of Lorem Ipsum available, but the",
            rating: 4.5,
        },
        {
            id: 2,
            heading: "Food Delivery",
            imgUrl: "/images/categories/food.png",
            info:
                "There are many variations of passages of Lorem Ipsum available, but the",
            rating: 4.7,
        },
        {
            id: 3,
            heading: "Beauty & Spa",
            imgUrl: "/images/categories/spa.png",
            info:
                "There are many variations of passages of Lorem Ipsum available, but the",
            rating: 3.5,
        },
        {
            id: 4,
            heading: "Best Resorts",
            imgUrl: "/images/categories/resort.png",
            info:
                "There are many variations of passages of Lorem Ipsum available, but the",
            rating: 4.5,
        },
        {
            id: 5,
            heading: "Tour & travel",
            imgUrl: "/images/categories/tour-travel.png",
            info:
                "There are many variations of passages of Lorem Ipsum available, but the",
            rating: 4.5,
        },
        {
            id: 6,
            heading: "Food Delivery",
            imgUrl: "/images/categories/food.png",
            info:
                "There are many variations of passages of Lorem Ipsum available, but the",
            rating: 4.7,
        },
        {
            id: 7,
            heading: "Beauty & Spa",
            imgUrl: "/images/categories/spa.png",
            info:
                "There are many variations of passages of Lorem Ipsum available, but the",
            rating: 3.5,
        },
        {
            id: 8,
            heading: "Best Resorts",
            imgUrl: "/images/categories/resort.png",
            info:
                "There are many variations of passages of Lorem Ipsum available, but the",
            rating: 4.5,
        },
    ]

    return (
        <section className='category-area mb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h2 className='category-title text-center'>
                            Pick a category from above and explore below
                        </h2>
                    </div>

                    <div className='col-12'>
                        <Slider {...settings}>
                            {categoryData.length > 0 &&
                                categoryData.map((category, index) => (
                                    <SingleCategory
                                        key={index}
                                        category={category}
                                    />
                                ))}
                        </Slider>
                    </div>

                    <div className='col-lg-12 text-center mt-2'>
                        <a className='shadow-btn' href='#'>
                            View More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
