import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const CustomerSingleActivity = ({ activityList, onClickItem }) => {
    return (
        <ul className='side-activities'>
            {activityList && activityList.length > 0 &&
                activityList.map((item, index) => (
                    <li className='side-activitie-item' key={index} onClick={onClickItem}>
                        {item.icon}
                        <Link className='side-list-icon' to={item.link}>
                            {item.name}
                        </Link>
                    </li>
                ))}
        </ul>
    )
}

CustomerSingleActivity.propTypes = {
    activityList: PropTypes.array.isRequired,
}

export default CustomerSingleActivity
