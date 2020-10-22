import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import ProviderSingleFeature from "../components/Layout/Sidebar/ProviderSingleFeature"
import { CustomLoader } from "../components/UI/Loader"
import { providerFeatureList } from "../mock-data/sidebar"
import { getProviderProfileInfo } from "../services/profile"

const ProviderSidebar = () => {
    const dispatch = useDispatch()

    const [providerDetails, setProviderDetails] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProfileInfo()
    }, [])

    const getProfileInfo = () => {
        dispatch(
            getProviderProfileInfo((res, err) => {
                setLoading(false)
                if (res && res.data && res.data.UserDetails) {
                    setProviderDetails(res.data.UserDetails)
                }
            })
        )
    }

    return (
        <div className='booking-sidebar'>
            {!loading ? (
                <div className='text-center'>
                    <div className='side-profile-container'>
                        <img
                            className='side-profile'
                            src={
                                providerDetails &&
                                providerDetails.icon_image_path &&
                                providerDetails.icon_image_path != ""
                                    ? providerDetails.icon_image_path
                                    : "/images/placeholder/avatar.png"
                            }
                            alt=''
                        />
                    </div>
                    <h4 className='side-name'>
                        {providerDetails
                            ? (providerDetails.first_name
                                  ? providerDetails.first_name
                                  : "") +
                              " " +
                              (providerDetails.last_name
                                  ? providerDetails.last_name
                                  : "")
                            : ""}
                    </h4>
                </div>
            ) : (
                <div className='border px-3 rounded'>
                    <CustomLoader />
                </div>
            )}

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
