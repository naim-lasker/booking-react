import React from "react"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import Pagination from "../../../../components/UI/Pagination"

const PromotionDealsPage = () => {
    return (
        <div className='col-lg-9 promotion-area'>
            <div className='d-flex flex-md-row flex-column justify-content-sm-between align-items-md-center pb-5'>
                <Breadcrumb
                    icon={<FaHome />}
                    names={[
                        { name: "Promotion", link: "/promotion" },
                        { name: "Leave a review" },
                    ]}
                />

                <div>
                    <Link
                        className='border-btn primary-color my-md-0 my-3'
                        to='/'
                    >
                        Show More
                    </Link>
                    <Link className='border-btn primary-color ml-md-3' to='/'>
                        <span className='fas fa-filter mt-1'></span>
                        Apply Filter
                    </Link>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-6 col-md-6'>
                    <div className='single-promotion'>
                        <img
                            className='img-fluid'
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
                                        <h4 className='section-header'>
                                            Beauty & Spa
                                        </h4>
                                        <div>
                                            <i className='single-promotion-star fa fa-star'></i>
                                            <i className='single-promotion-star fa fa-star'></i>
                                            <i className='single-promotion-star fa fa-star'></i>
                                            <i className='single-promotion-star fa fa-star'></i>
                                            <i className='single-promotion-star fa fa-star-half '></i>
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
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority
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
            </div>

            <div className='row mt-4'>
                <div className='col-lg-12'>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}
export default PromotionDealsPage
