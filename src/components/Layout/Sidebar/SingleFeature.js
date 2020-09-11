import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const SingleFeature = ({ featureList }) => {
    return (
        <ul className='side-features'>
            {featureList &&
                featureList.length > 0 &&
                featureList.map((item, index) => (
                    <li className='side-feature-item' key={index}>
                        {item && item.icon}
                        <Link className='side-list-icon' to={item && item.link}>
                            {item && item.name}
                        </Link>
                    </li>
                ))}
        </ul>
    )
}

SingleFeature.propTypes = {
    featureList: PropTypes.array.isRequired,
}

export default SingleFeature
