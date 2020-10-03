import React from "react"
import { FaHome, FaStar, FaStarHalf } from "react-icons/fa"
import Breadcrumb from "../../../../components/UI/Breadcrumb"

const ProviderRatingList = () => {
    return (
        <section className='my-rating-area'>
            <Breadcrumb
                icon={<FaHome />}
                names={[
                    { name: "Dashboard", link: "/provider-booking" },
                    { name: "My Ratings" },
                ]}
            />

            <div className='row justify-content-center'>
                <div className='myrating-head-container'>
                    <div className='myrating-img-container text-center'>
                        <img src='/images/profile/profile.png' alt='' />
                    </div>
                    <h3 className='text-center rating-point'>3.85</h3>
                    <div className='stars'>
                        <FaStar className='single-promotion-star' />
                        <FaStar className='single-promotion-star' />
                        <FaStar className='single-promotion-star' />
                        <FaStar className='single-promotion-star' />
                        <FaStarHalf className='single-promotion-star' />
                    </div>
                    <h4 className='rating-total text-center'>216 Reviews</h4>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-10'>
                    <div className='review-container d-flex flex-column align-items-center'>
                        <div className='stars'>
                            <FaStar className='single-promotion-star' />
                            <FaStar className='single-promotion-star' />
                            <FaStar className='single-promotion-star' />
                            <FaStar className='single-promotion-star' />
                            <FaStar className='single-promotion-star' />
                        </div>
                        <p className='review-para'>
                            Great Place, Amazing view, worth a shot. Everyone
                            should be going to enjoy themseves there. Best
                            customer service in town!
                        </p>
                    </div>

                    <div className='review-container d-flex flex-column align-items-center'>
                        <div className='stars'>
                            <FaStar className='single-promotion-star' />
                            <FaStar className='single-promotion-star' />
                            <FaStar className='single-promotion-star' />
                            <FaStar className='single-promotion-star' />
                            <FaStarHalf className='single-promotion-star' />
                        </div>
                        <p className='review-para'>
                            Great Place, Amazing view, worth a shot. Everyone
                            should be going to enjoy themseves there. Best
                            customer service in town!
                        </p>
                    </div>

                    <div className='review-container'>
                        <div className='stars text-center'>
                            <FaStar className='single-promotion-star' />
                            <FaStar className='single-promotion-star' />
                            <FaStar className='single-promotion-star' />
                        </div>
                        <p className='review-para'>Could have been better</p>
                    </div>

                    <div className='review-container'>
                        <div className='stars text-center'>
                            <FaStar className='single-promotion-star' />
                            <FaStar className='single-promotion-star' />
                            <FaStar className='single-promotion-star' />
                            <FaStar className='single-promotion-star' />
                        </div>
                        <p className='review-para'>Service was rubbish</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProviderRatingList
