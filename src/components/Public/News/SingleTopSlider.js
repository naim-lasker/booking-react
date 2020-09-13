import React from "react"

const SingleTopSlider = ({ news }) => {
    return (
        <div className='single-top-news position-relative'>
            <img className='img-fluid' src={news && news.imgUrl} alt='' />
            <div className='content-wrapper'>
                <a href='/' className='badge-btn white-bg'>{news && news.tag}</a>
                <h3>{news && news.heading}</h3>
            </div>

            <div className='floating-date d-flex flex-column justify-content-center'>
                <span className='floating-day'>{news && news.date}</span>
                <span className='floating-month'>{news && news.month}</span>
            </div>
        </div>
    )
}

export default SingleTopSlider
