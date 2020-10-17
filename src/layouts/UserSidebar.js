import React from "react"
import { Link } from "react-router-dom"
import CustomerSingleActivity from "../components/Layout/Sidebar/CustomerSingleActivity"
import CustomerSingleFeature from "../components/Layout/Sidebar/CustomerSingleFeature"
import { userActivityList, userFeatureList } from "../mock-data/sidebar"


const UserSidebar = () => {
    return (
        <div className='booking-sidebar'>
            <div className='text-center'>
                <div className='side-profile-container'>
                    <img
                        className='side-profile'
                        src='/images/placeholder/avatar.png'
                        alt=''
                    />
                </div>
                <h4 className='side-name'>Charli Maria</h4>
            </div>
            <div className='side-btn-container text-center'>
                <Link className='border-btn' to='/'>
                    Edit Profile
                </Link>
            </div>

            <div className='side-list'>
                <CustomerSingleActivity activityList={userActivityList} />

                <CustomerSingleFeature featureList={userFeatureList} />
            </div>
        </div>
    )
}

export default UserSidebar
