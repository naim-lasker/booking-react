import React from "react"
import { Link } from "react-router-dom"
import ProviderSingleFeature from "../components/Layout/Sidebar/ProviderSingleFeature"
import auth from "../helpers/auth"
import { providerFeatureList } from "../mock-data/sidebar"

const ProviderSidebar = () => {
    const providerInfo = auth.getProviderInfo()

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
                <h4 className='side-name'>
                    {providerInfo
                        ? providerInfo.first_name + " " + providerInfo.last_name
                        : ""}
                </h4>
            </div>

            <div className='side-btn-container text-center'>
                <Link className='border-btn' to='/provider-edit-profile'>
                    Edit Profile
                </Link>
            </div>

            <div className='side-list'>
                <ProviderSingleFeature featureList={providerFeatureList} />
            </div>
        </div>
    )
}

export default ProviderSidebar
