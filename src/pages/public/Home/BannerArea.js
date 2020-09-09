import React from "react"
import { Carousel } from "react-bootstrap"

export default () => {
    const bannerData = [
        {
            heading: "Be in Paradise",
            topPara:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            middlePara:
                "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
            bottomPara:
                "Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
        },
        {
            heading: "Be in Paradise",
            topPara:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            middlePara:
                "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
            bottomPara:
                "Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
        },
        {
            heading: "Be in Paradise",
            topPara:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            middlePara:
                "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
            bottomPara:
                "Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
        },
        {
            heading: "Be in Paradise",
            topPara:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            middlePara:
                "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
            bottomPara:
                "Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
        },
    ]

    return (
        <section className='banner-area'>
            <div className='container'>
                <div className='owl-carousel banner-container'>
                    <Carousel controls={false}>
                        {bannerData.length > 0 &&
                            bannerData.map((banner, index) => (
                                <Carousel.Item key={index}>
                                    <div className='banner-content d-flex flex-column justify-content-center align-items-center'>
                                        <div className='banner-info text-center '>
                                            <h1 className='section-header text-white mb-3'>
                                                {banner.heading}
                                            </h1>
                                            <p className='para text-white mb-3'>
                                                {banner.topPara}
                                            </p>
                                            <p className='para text-white mb-3'>
                                                {banner.middlePara}
                                            </p>
                                            <p className='para text-white'>
                                                {banner.bottomPara}
                                            </p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
