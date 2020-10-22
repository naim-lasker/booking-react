import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import CustomerSingleActivity from "../components/Layout/Sidebar/CustomerSingleActivity"
import CustomerSingleFeature from "../components/Layout/Sidebar/CustomerSingleFeature"
import { CustomLoader } from "../components/UI/Loader"
import { userActivityList, userFeatureList } from "../mock-data/sidebar"
import { getUserProfileInfo } from "../services/profile"

const UserSidebar = () => {
    const dispatch = useDispatch()

    const [userDetails, setUserDetails] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProfileInfo()
    }, [])

    const getProfileInfo = () => {
        dispatch(
            getUserProfileInfo((res, err) => {
                setLoading(false)

                if (res && res.data && res.data.UserDetails) {
                    setUserDetails(res.data.UserDetails)
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
                                userDetails &&
                                userDetails.icon_image_path &&
                                userDetails.icon_image_path != ""
                                    ? userDetails.icon_image_path
                                    : "/images/placeholder/avatar.png"
                            }
                            alt=''
                        />
                    </div>
                    <h4 className='side-name'>
                        {userDetails
                            ? (userDetails.first_name
                                  ? userDetails.first_name
                                  : "") +
                              " " +
                              (userDetails.last_name
                                  ? userDetails.last_name
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
                <Link className='border-btn' to='/user-edit-profile'>
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
