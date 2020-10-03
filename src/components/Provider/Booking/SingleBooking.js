import React from "react"
import { FaStar, FaStarHalf } from "react-icons/fa"

const SingleBooking = () => {

    return (
        <div className='single-booking'>
            <div className='single-booking-top py-sm-4 px-sm-5 py-4 px-3'>
                <div className='d-flex justify-content-between mb-3'>
                    <div className='d-flex'>
                        <div className='avatar mr-3'>
                            <img
                                src='/images/booking/avater1.png'
                                alt=''
                            />
                        </div>
                        <div>
                            <h5 className='customer-name'>Simi Pathew</h5>
                            <div className='stars'>
                                <FaStar className='single-star' />
                                <FaStar className='single-star' />
                                <FaStar className='single-star' />
                                <FaStar className='single-star' />
                                <FaStarHalf className='single-star' />
                                <span className='single-rating'>(4.5)</span>
                            </div>
                        </div>
                    </div>
                    <div className='amount align-self-center'>$30</div>
                </div>

                <div className='d-lg-flex justify-content-lg-between align-items-center'>
                    <div className='booking-left-content pr-3'>
                        <p className='single-booking-para mb-0'>
                            Hair cutting,Tan removal,Nail treatment, Spa
                        </p>
                        <h5 className='left-header mb-2'>
                            Booking Date :
                            <span className='gray-text2 font-weight-normal'>
                                {" "}
                                26 th July 2018, M
                            </span>
                        </h5>
                        <div className='d-md-flex'>
                            <h5 className='left-header mb-md-0 mb-2'>
                                Arrival time :
                                <span className='gray-text2 font-weight-normal'>
                                    2:30 PM
                                </span>
                            </h5>
                            <h5 className='left-header ml-md-3'>
                                Finishing time :{" "}
                                <span className='gray-text2 font-weight-normal'>
                                    2:30 PM
                                </span>
                            </h5>
                        </div>
                    </div>

                    <div className='mt-lg-0 mt-4'>
                        <div className='d-flex'>
                            <input
                                type='text'
                                className='form-control input-box py-2'
                                placeholder='Enter final amount'
                            />
                            <button className='question-icon ml-3 align-self-center'>
                                ?
                            </button>
                        </div>
                        <div className='d-flex mt-lg-0 mt-2'>
                            <button className='shadow-btn w-100'>Complete</button>
                            <button className='question-icon ml-3 align-self-center'>
                                ?
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <span className='single-booking-line'></span>
                <span className='single-booking-line'></span>
            </div>

            <div className='py-3 pl-5'>
                <a className='view-more-btn' href='#'>
                    <img
                        src='/images/icons/arrow-shape.png'
                        alt=''
                        className='mr-2'
                    />
                    View Details
                </a>
            </div>
        </div>
    )
}

export default SingleBooking
