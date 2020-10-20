import React from "react"
import { FaStar, FaStarHalf } from "react-icons/fa"
import { Link } from "react-router-dom"
import { CustomLoader } from "../../../UI/Loader"
import PlaceholderData from "../../../UI/PlaceholderData"

const SingleStore = ({ loading, stores }) => {
    return !loading ? (
        stores && stores.length > 0 ? (
            stores.map((store, index) => (
                <div className='col-lg-6 col-md-6' key={index}>
                    <div className='single-promotion'>
                        <img
                            className='img-fluid w-100'
                            src={store.image_path ? store.image_path : '/images/no-image-horizontal.png'}
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
                                            {store.company_name}
                                        </h4>
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
                                        ${store.selling_price}
                                    </div>
                                </div>
                            </div>
                            <p className='single-promotion-para'>
                                {store.about_com}
                            </p>

                            <div className='single-promotion-bottom'>
                                <span className='single-promotion-line'></span>
                                <span className='single-promotion-line'></span>
                            </div>

                            <div className='mb-2'>
                                <Link className='view-more-btn' to='/user-restaurant-list'>
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
            ))
        ) : (
            <div className='col-lg-12'>
                <div className='border py-5 px-3 rounded'>
                    <PlaceholderData text='No menu found!' />
                </div>
            </div>
        )
    ) : (
        <div className='col-lg-12'>
            <div className='border py-5 my-5 px-3 rounded'>
                <CustomLoader />
            </div>
        </div>
    )
}
export default SingleStore
