import React from "react"

const SingleCategory = ({ category }) => {
    return (
        <div className='single-category'>
            <img
                className='img-fluid w-100'
                src={category && category.imgUrl}
                alt=''
            />

            <div className='single-category-middle text-center'>
                <h4 className='single-category-title'>{category && category.heading}</h4>
                <p className='single-category-para'>{category && category.info}</p>
                <i className='single-category-star fa fa-star'></i>
                <i className='single-category-star fa fa-star'></i>
                <i className='single-category-star fa fa-star'></i>
                <i className='single-category-star fa fa-star'></i>
                <i className='single-category-star fa fa-star-half '></i>
                <span className='single-category-rating'>({category && category.rating})</span>
            </div>
            <div className='single-category-bottom'>
                <span className='single-category-line'></span>
                <span className='single-category-line'></span>
            </div>
        </div>
    )
}

export default SingleCategory
