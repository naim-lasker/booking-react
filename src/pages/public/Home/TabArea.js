import React from "react"
import { Tabs, Tab } from "react-bootstrap"
import TabHeading from "../../../components/Public/Home/Tab/TabHeading"
import BookFlightTab from "../../../components/Public/Home/Tab/BookFlightTab"
import HotelRoomTab from "../../../components/Public/Home/Tab/HotelRoomTab"
import CarHireTab from "../../../components/Public/Home/Tab/CarHireTab"
import AirportTaxiTab from "../../../components/Public/Home/Tab/AirportTaxiTab"
import ActivitiesTab from "../../../components/Public/Home/Tab/ActivitiesTab"

export default () => {
    return (
        <section className='home-booking-area pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Tabs defaultActiveKey='flight'>
                            {/* ##### Flight Tab ##### */}
                            <Tab
                                eventKey='flight'
                                title={
                                    <TabHeading
                                        imgUrl='/images/icons/plane.png'
                                        description='Book a'
                                        title='Flight'
                                    />
                                }
                            >
                                <BookFlightTab />
                            </Tab>

                            {/* ##### Hotel Tab ##### */}
                            <Tab
                                eventKey='hotel'
                                title={
                                    <TabHeading
                                        imgUrl='/images/icons/hotel.png'
                                        description='Find a room at a'
                                        title='Hotel'
                                    />
                                }
                            >
                                <HotelRoomTab />
                            </Tab>

                            {/* ##### Car Tab ##### */}
                            <Tab
                                eventKey='car'
                                title={
                                    <TabHeading
                                        imgUrl='/images/icons/car.png'
                                        description='Get a quote'
                                        title='Car Hire'
                                    />
                                }
                            >
                                <CarHireTab />
                            </Tab>

                            {/* ##### Taxi Tab ##### */}
                            <Tab
                                eventKey='taxi'
                                title={
                                    <TabHeading
                                        imgUrl='/images/icons/car.png'
                                        description='Book an'
                                        title='Airport Taxi'
                                    />
                                }
                            >
                                <AirportTaxiTab />
                            </Tab>

                            {/* ##### Contact Tab ##### */}
                            <Tab
                                eventKey='activities'
                                title={
                                    <TabHeading
                                        imgUrl='/images/icons/fun.png'
                                        description='Find fun'
                                        title='Activities'
                                    />
                                }
                            >
                                <ActivitiesTab />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}
