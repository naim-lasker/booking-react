import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { FaAngleDoubleRight } from "react-icons/fa"

const Breadcrumb = ({ icon, names }) => {
    return (
        <nav className='breadcrumb-nav'>
            <ul className='breadcrumb-list d-flex align-items-center'>
                <li className='breadcrumb-icon'>{icon}</li>
                {names && names.length > 0 &&
                    names.map((item, index) => (
                        <Fragment key={index}>
                            <li
                                className={index !== names.length - 1 ? "mr-4" : null}
                            >
                                {item.link ? (
                                    <Link
                                        className='breadcrumb-text'
                                        to={item.link}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <span className='breadcrumb-text'>
                                        {item.name}
                                    </span>
                                )}
                            </li>
                            {index !== names.length - 1 && (
                                <li className='breadcrumb-icon'>
                                    <FaAngleDoubleRight />
                                </li>
                            )}
                        </Fragment>
                    ))}
            </ul>
        </nav>
    )
}

Breadcrumb.propTypes = {
    icon: PropTypes.object.isRequired,
    names: PropTypes.array.isRequired,
}

export default Breadcrumb
