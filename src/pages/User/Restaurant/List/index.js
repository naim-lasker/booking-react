import React from "react"
import { FaHome } from "react-icons/fa"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import Pagination from "../../../../components/UI/Pagination"
import SinglePromotion from "../../../../components/User/Restaurant/List/SinglePromotion"

const RestaurantList = () => {
    return (
        <div className='promotion-area'>
            <div className='d-md-flex flex-md-row flex-column justify-content-sm-between align-items-start'>
                <Breadcrumb
                    icon={<FaHome />}
                    names={[
                        { name: "Dashboard", link: "/user-promotion-list" },
                        { name: "Restaurant" },
                    ]}
                />
            </div>

            <div className='row'>
                <SinglePromotion />
                <SinglePromotion />
                <SinglePromotion />
                <SinglePromotion />
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
