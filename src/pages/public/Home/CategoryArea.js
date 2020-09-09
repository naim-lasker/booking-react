import React from "react"
import Slider from "react-slick"
import SingleCategory from "../../../components/Home/SingleCategory"

export default () => {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: 30,
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
            heading: "Restaurants",
            imgUrl: "/images/activities/restaurant.png",
        },
        {
            heading: "Tour & Excursions",
            imgUrl: "/images/activities/tour.png",
        },
        {
            heading: "Land Activities",
            imgUrl: "/images/activities/land.png",
        },
        {
            heading: "Water Activities",
            imgUrl: "/images/activities/water.png",
        },
        {
            heading: "Land Activities",
            imgUrl: "/images/activities/land.png",
        },
        {
            heading: "Water Activities",
            imgUrl: "/images/activities/water.png",
        },
    ]

    return (
        <section className='category-area'>
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
                </div>
            </div>
        </section>
    )
}
