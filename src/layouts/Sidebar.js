import React from "react"
import { Link } from "react-router-dom"
import SingleActivity from "../components/Layout/Sidebar/SingleActivity"
import SingleFeature from "../components/Layout/Sidebar/SingleFeature"
import { activityList, featureList } from "../mock-data/sidebar"


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
                <Link className='border-btn' to='/'>
                    Edit Profile
                </Link>
            </div>

            <div className='side-list'>
                <SingleActivity activityList={activityList} />

                <SingleFeature featureList={featureList} />
            </div>
        </div>
    )
}

export default Sidebar
