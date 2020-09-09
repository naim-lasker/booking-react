import React, { Fragment } from "react"

const SingleBanner = ({ text }) => {
    return (
        <Fragment>
            <p className='mb-0 tab-top-text'>{text}</p>
            <button className='question-icon ml-3'>?</button>
        </Fragment>
    )
}

export default SingleBanner
