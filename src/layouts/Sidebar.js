import React from "react"

const Sidebar = () => {
    return (
        <div className='booking-sidebar'>
            <div className='text-center'>
                <div className='side-profile-container'>
                    <img
                        className='side-profile'
                        src='/images/profile/profile.png'
                        alt=''
                    />
                </div>
                <h4 className='side-name'>Charli Maria</h4>
            </div>
            <div className='side-btn-container text-center'>
                <a className='border-btn' href='customer-edit.html'>
                    Edit Profile
                </a>
            </div>

            <div className='side-liest'>
                <ul className='side-activities'>
                    <li className='side-activitie-item'>
                        <i className='fa fa-eye'></i>
                        <a
                            className='side-list-icon'
                            href='customer-promotion.html'
                        >
                            Promotion
                        </a>
                    </li>
                    <li className='side-activitie-item'>
                        <i className='fa fa-eye'></i>
                        <a className='side-list-icon' href='#'>
                            Restaurant
                        </a>
                    </li>
                    <li className='side-activitie-item'>
                        <i className='fa fa-eye'></i>
                        <a className='side-list-icon' href='#'>
                            Tours & Excursions
                        </a>
                    </li>
                    <li className='side-activitie-item'>
                        <i className='fa fa-eye'></i>
                        <a className='side-list-icon' href='#'>
                            Water Activities
                        </a>
                    </li>
                    <li className='side-activitie-item'>
                        <i className='fa fa-eye'></i>
                        <a className='side-list-icon' href='#'>
                            Land Activities
                        </a>
                    </li>
                </ul>

                <ul className='side-features'>
                    <li className='side-feature-item'>
                        <i className='fa fa-book-open'></i>
                        <a className='side-list-icon' href='#'>
                            My Bookings
                        </a>
                    </li>
                    <li className='side-feature-item'>
                        <i className='fa fa-envelope'></i>
                        <a className='side-list-icon' href='#'>
                            Messeges
                        </a>
                    </li>
                    <li className='side-feature-item'>
                        <i className='fa fa-heart'></i>
                        <a className='side-list-icon' href='#'>
                            Favourites
                        </a>
                    </li>
                    <li className='side-feature-item'>
                        <i className='fa fa-star'></i>
                        <a className='side-list-icon' href='#'>
                            My Ratings
                        </a>
                    </li>
                    <li className='side-feature-item'>
                        <i className='fa fa-envelope'></i>
                        <a className='side-list-icon' href='#'>
                            Contact Supports
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
