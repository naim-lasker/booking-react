import React, { Fragment } from "react"
import PropTypes from "prop-types"

const PlaceholderData = ({ text }) => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center w-100 placeholder-wrapper p-3'>
            <img src='/images/sad-face.png' alt='' />
            <h2 className='mb-1 mt-3'>Sorry!</h2>
            <p>{text}</p>
        </div>
    )
}

export default PlaceholderData
