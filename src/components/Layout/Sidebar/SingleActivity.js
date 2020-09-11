import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const SingleActivity = ({ activityList }) => {
    return (
        <ul className='side-activities'>
            {activityList && activityList.length > 0 &&
                activityList.map((item, index) => (
                    <li className='side-activitie-item' key={index}>
                        {item && item.icon}
                        <Link className='side-list-icon' to={item && item.link}>
                            {item && item.name}
                        </Link>
                    </li>
                ))}
        </ul>
    )
}

SingleActivity.propTypes = {
    activityList: PropTypes.array.isRequired,
}

export default SingleActivity
