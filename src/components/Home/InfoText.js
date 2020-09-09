import React, { Fragment } from "react"

const InfoText = ({ text }) => {
    return (
        <Fragment>
            <p className='mb-0 tab-top-text'>{text}</p>
            <button className='question-icon ml-3'>?</button>
        </Fragment>
    )
}

export default InfoText
