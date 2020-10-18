import React, { useEffect, useState } from "react"
import { FaHome } from "react-icons/fa"
import { useDispatch } from "react-redux"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import Pagination from "../../../../components/UI/Pagination"
import SinglePromotion from "../../../../components/User/Restaurant/List/SinglePromotion"
import { notify } from "../../../../helpers/ui"
import { getCustomerMenuList } from "../../../../services/menu"

const RestaurantList = () => {
    const dispatch = useDispatch()
    const [stores, setStores] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        menuList()
    }, [])

    const menuList = () => {
        dispatch(
            getCustomerMenuList((res, err) => {
                setLoading(false)

                if (res && res.status == "success") {
                    setStores(res.data.all_stores)
                } else if (err) {
                    notify("error", "Something went wrong")
                }
            })
        )
    }

    return (
        <div className='promotion-area'>
            <div className='d-md-flex flex-md-row flex-column justify-content-sm-between align-items-start'>
                <Breadcrumb
                    icon={<FaHome />}
                    names={[
                        { name: "Dashboard", link: "/user-restaurant-list" },
                        { name: "Restaurant" },
                    ]}
                />
            </div>

            <div className='row'>
                <SinglePromotion stores={stores} />
            </div>

            <div className='row mt-4'>
                <div className='col-lg-12'>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}
export default RestaurantList
