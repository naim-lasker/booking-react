import React from "react"

const SingleCategory = ({ category }) => {
    return (
        <div className='single-category'>
            <img
                className='img-fluid w-100'
                src='/images/Categories/tour-travel.png'
                alt=''
            />

            <div className='single-category-middle text-center'>
                <h4 className='single-category-title'>Tour & travel</h4>
                <p className='single-category-para'>
                    There are many variations of passages of Lorem Ipsum
                    available, but the
                </p>
                <i className='single-category-star fa fa-star'></i>
                <i className='single-category-star fa fa-star'></i>
                <i className='single-category-star fa fa-star'></i>
                <i className='single-category-star fa fa-star'></i>
                <i className='single-category-star fa fa-star-half '></i>
                <span className='single-category-rating'>(4.5)</span>
            </div>
            <div className='single-category-bottom'>
                <span className='single-category-line'></span>
                <span className='single-category-line'></span>
            </div>
        </div>
    )
}

export default SingleCategory
