import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const CustomerSingleFeature = ({ featureList, onClickItem }) => {
    return (
        <ul className='side-features'>
            {featureList &&
                featureList.length > 0 &&
                featureList.map((item, index) => (
                    <li className='side-feature-item' key={index} onClick={onClickItem}>
                        {item.icon}
                        <Link className='side-list-icon' to={item.link}>
                            {item.name}
                        </Link>
                    </li>
                ))}
        </ul>
    )
}

CustomerSingleFeature.propTypes = {
    featureList: PropTypes.array.isRequired,
}

export default CustomerSingleFeature
