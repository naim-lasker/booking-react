import React, { useEffect, useState } from "react"
import { FaFilter, FaHome } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import Pagination from "../../../../components/UI/Pagination"
import StoreFilterModal from "../../../../components/Public/Filter/StoreFilterModal"
import SingleStore from "../../../../components/User/Restaurant/List/SingleStore"
import { notify } from "../../../../helpers/ui"
import { getCustomerMenuList } from "../../../../services/store"

const RestaurantList = () => {
    const dispatch = useDispatch()
    const [stores, setStores] = useState([])
    const [loading, setLoading] = useState(true)
    const [showFilterModal, setShowFilterModal] = useState(false)

    useEffect(() => {
        menuList()
    }, [])

    const menuList = () => {
        dispatch(
            getCustomerMenuList((res, err) => {
                setLoading(false)
                if (res && res.data.status == "success") {
                    setStores(res.data.all_stores)
                } else if (err) {
                    notify("error", "Something went wrong")
                }
            })
        )
    }

    return (
        <div className='promotion-area'>
            <div className='d-md-flex flex-md-row flex-column justify-content-sm-between align-items-center'>
                <Breadcrumb
                    icon={<FaHome />}
                    names={[
                        { name: "Dashboard", link: "/user-restaurant-list" },
                        { name: "Restaurant" },
                    ]}
                />

                <div className='mb-5'>
                    <Link
                        className='border-btn primary-color my-md-0 my-3'
                        to='/user-restaurant-list'
                    >
                        Show More
                    </Link>
                    <button onClick={() => setShowFilterModal(true)}
                        className='border-btn primary-color ml-md-3'
                    >
                        <FaFilter className='mr-1' />
                        Apply Filter
                    </button>
                </div>
            </div>

            <StoreFilterModal show={showFilterModal} onHide={() => setShowFilterModal(false)} />

            <div className='row'>
                <SingleStore stores={stores} loading={loading} />
            </div>

            <div className='row mt-4'>
                <div className='col-lg-12'>
                    {/* <Pagination /> */}
                </div>
            </div>
        </div>
    )
}
export default RestaurantList
