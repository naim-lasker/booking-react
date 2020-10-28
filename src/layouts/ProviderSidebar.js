import React, { useEffect, useState } from "react"
import { FaBars, FaTimesCircle } from "react-icons/fa"
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
    const [showSidebar, setShowSidebar] = useState(false)

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

    const openSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const closeSidebar = () => {
        setShowSidebar(false)
    }

    return (
        <div className={`booking-sidebar ${showSidebar ? "show-sidebar" : ""}`}>
            {!showSidebar && (
                <button
                    className='navbar-toggler sidebar-toggler'
                    type='button'
                    onClick={openSidebar}
                >
                    <FaBars />
                </button>
            )}

            <div className='text-right mb-2 d-lg-none d-block'>
                <button type='button' onClick={closeSidebar}>
                    <FaTimesCircle size='22' />
                </button>
            </div>

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
                <Link className='border-btn' to='/provider-edit-profile' onClick={closeSidebar}>
                    Edit Profile
                </Link>
            </div>

            <div className='side-list'>
                <ProviderSingleFeature featureList={providerFeatureList} onClickItem={closeSidebar} />
            </div>
        </div>
    )
}

export default ProviderSidebar
