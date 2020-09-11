import React from "react"

const TabHeading = ({ imgUrl, description, title }) => {
    return (
        <div className='d-flex align-items-center'>
            <div className='mr-2'>
                <img src={imgUrl} alt={title} />
            </div>
            <div>
                <p className='tab-top-text'>{description}</p>
                <h3 className='tab-bottom-text'>{title}</h3>
            </div>
        </div>
    )
}

export default TabHeading
