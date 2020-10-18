import React from "react"
import { FaStar, FaStarHalf } from "react-icons/fa"
import { Link } from "react-router-dom"

const SinglePromotion = ({ stores }) => {
    return (
        <div className='col-lg-6 col-md-6'>
            <div className='single-promotion'>
                <img
                    className='img-fluid w-100'
                    src='/images/promotion/beauty2.png'
                    alt=''
                />
                <div className='single-promotion-content'>
                    <div className='single-promotion-head-content d-flex mt-3'>
                        <img
                            className='avatar img-fluid'
                            src='/images/promotion/promo-avatar.png'
                            alt=''
                        />
                        <div className='single-promotion-head-info d-flex justify-content-between align-items-center w-100'>
                            <div className='header-content pl-3'>
                                <h4 className='section-header'>Beauty & Spa</h4>
                                <div>
                                    <FaStar className='single-promotion-star' />
                                    <FaStar className='single-promotion-star' />
                                    <FaStar className='single-promotion-star' />
                                    <FaStar className='single-promotion-star' />
                                    <FaStarHalf />
                                    <span className='single-promotion-rating'>
                                        (4.5)
                                    </span>
                                </div>
                            </div>
                            <div className='single-promotion-price align-self-start'>
                                $30
                            </div>
                        </div>
                    </div>
                    <p className='single-promotion-para'>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority
                    </p>

                    <div className='single-promotion-bottom'>
                        <span className='single-promotion-line'></span>
                        <span className='single-promotion-line'></span>
                    </div>

                    <div className='mb-2'>
                        <Link className='view-more-btn' to='/'>
                            <img
                                src='/images/icons/arrow-shape.png'
                                alt=''
                                className='mr-2'
                            />
                            View More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SinglePromotion
