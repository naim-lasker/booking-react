import React from "react"
import { Tab, Tabs } from "react-bootstrap"
import { FaHome } from "react-icons/fa"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import Pagination from "../../../../components/UI/Pagination"
import SingleBooking from "../../../../components/Provider/Booking/SingleBooking"

const ProviderBookingList = () => {
    return (
        <section className='booking-area'>
            <Breadcrumb icon={<FaHome />} names={[{ name: "Booking" }]} />

            <div className='row'>
                <div className='col-lg-11'>
                    <Tabs className='shadow-tab' defaultActiveKey='currentBooking'>
                        <Tab eventKey='currentBooking' title='Current Booking'>
                            <SingleBooking />
                            <SingleBooking />
                            <SingleBooking />
                            <SingleBooking />
                        </Tab>
                        <Tab eventKey='pastBooking' title='Past Booking'>
                            <SingleBooking />
                            <SingleBooking />
                            <SingleBooking />
                            <SingleBooking />
                        </Tab>
                    </Tabs>
                </div>
            </div>

            <Pagination />
        </section>
    )
}
export default ProviderBookingList
