import React from "react"
import Pagination from "../../../../layouts/Pagination"

const PromotionDealsPage = () => {
    return (
        <div className='col-lg-9 promotion-area'>
            <div className='ml-lg-4'>
                <div className='d-flex flex-md-row flex-column justify-content-sm-between align-items-md-center pb-5'>
                    <nav className='breadcrumb-nav'>
                        <ul className='breadcrumb-list d-flex'>
                            <li className='breadcrumb-icon'>
                                <i className='fa fa-home'></i>
                            </li>
                            <li className='breadcrumb-text'>Promotion</li>
                        </ul>
                    </nav>

                    <div>
                        <a
                            className='border-btn primary-color my-md-0 my-3'
                            href='#'
                        >
                            Show More
                        </a>
                        <a
                            className='border-btn primary-color ml-md-3'
                            href='#'
                        >
                            <span className='fas fa-filter mt-1'></span>
                            Apply Filter
                        </a>
                    </div>
                </div>

                <div class='row'>
                    <div class='col-lg-6 col-md-6'>
                        <div class='single-promotion'>
                            <img
                                class='img-fluid'
                                src='/images/promotion/beauty2.png'
                                alt=''
                            />
                            <div class='single-promotion-content'>
                                <div class='single-promotion-head-content d-flex mt-3'>
                                    <img
                                        class='avatar img-fluid'
                                        src='/images/promotion/promo-avatar.png'
                                        alt=''
                                    />
                                    <div class='single-promotion-head-info d-flex justify-content-between align-items-center w-100'>
                                        <div class='header-content pl-3'>
                                            <h4 class='section-header'>
                                                Beauty & Spa
                                            </h4>
                                            <div>
                                                <i class='single-promotion-star fa fa-star'></i>
                                                <i class='single-promotion-star fa fa-star'></i>
                                                <i class='single-promotion-star fa fa-star'></i>
                                                <i class='single-promotion-star fa fa-star'></i>
                                                <i class='single-promotion-star fa fa-star-half '></i>
                                                <span class='single-promotion-rating'>
                                                    (4.5)
                                                </span>
                                            </div>
                                        </div>
                                        <div class='single-promotion-price align-self-start'>
                                            $30
                                        </div>
                                    </div>
                                </div>
                                <p class='single-promotion-para'>
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority
                                </p>

                                <div class='single-promotion-bottom'>
                                    <span class='single-promotion-line'></span>
                                    <span class='single-promotion-line'></span>
                                </div>

                                <div class='mb-2'>
                                    <a class='view-more-btn' href='#'>
                                        <img
                                            src='/images/icons/arrow-shape.png'
                                            alt=''
                                            class='mr-2'
                                        />
                                        View More
                                    </a>
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
        </div>
    )
}
export default PromotionDealsPage
