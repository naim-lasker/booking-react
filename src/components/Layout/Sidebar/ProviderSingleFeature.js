import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Collapse } from "react-bootstrap"

const ProviderSingleFeature = ({ featureList }) => {
    const [open, setOpen] = useState(false)
    return (
        <ul className='side-activities'>
            {featureList &&
                featureList.length > 0 &&
                featureList.map((item, index) => (
                    <li className='side-feature-item' key={index}>
                        {item.icon}

                        <Link
                            className='side-list-icon'
                            onClick={() =>
                                item.dropdown &&
                                setOpen(!open)
                            }
                            to={item.link}
                        >
                            {item.name}
                        </Link>

                        {item.dropdown &&
                            item.dropdowns.map((dropdown, i) => (
                                <Collapse in={open} key={i}>
                                    <div className='ml-4'>
                                        <Link
                                            className='dropdown-item'
                                            to={dropdown.link}
                                        >
                                            <img
                                                src='/images/icons/arrow-shape.png'
                                                alt=''
                                            />
                                            <span className='ml-1'>
                                                {dropdown.name}
                                            </span>
                                        </Link>
                                    </div>
                                </Collapse>
                            ))}
                    </li>
                ))}
        </ul>
    )
}

ProviderSingleFeature.propTypes = {
    featureList: PropTypes.array.isRequired,
}

export default ProviderSingleFeature
