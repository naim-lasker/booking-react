import React from "react"
import { Tabs, Tab } from "react-bootstrap"
import TabHeading from "../../../components/Home/TabHeading"
import RadionInput from "../../../components/Home/RadionInput"
import DateTimeInput from "../../../components/Home/DateTimeInput"
import InfoText from "../../../components/Home/InfoText"

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
                                <div>
                                    <div className='row mb-3 align-items-end'>
                                        <div className='col-lg-3 col-md-6'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Van'
                                                icon='/images/icons/van.png'
                                            />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-md-0 mt-3'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Saloon'
                                                icon='/images/icons/saloon.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Arriving Date' />
                                            </div>

                                            <DateTimeInput
                                                placeholder='29/08/2020'
                                                icon='/images/icons/calendar.png'
                                            />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Pick Up Time' />
                                            </div>
                                            <DateTimeInput
                                                placeholder='15.00'
                                                icon='/images/icons/clock.png'
                                            />
                                        </div>
                                    </div>

                                    <div className='row align-items-end mt-lg-0 mt-5'>
                                        <div className='col-lg-3 col-md-6'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='People Carrier'
                                                icon='/images/icons/carrier.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-3'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Luxury'
                                                icon='/images/icons/luxury.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Departing Date' />
                                            </div>

                                            <DateTimeInput
                                                placeholder='29/08/2020'
                                                icon='/images/icons/calendar.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Drop Off Time' />
                                            </div>
                                            <DateTimeInput
                                                placeholder='15.00'
                                                icon='/images/icons/clock.png'
                                            />
                                        </div>
                                    </div>
                                </div>
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
                                <div>
                                    <div className='row mb-3 align-items-end'>
                                        <div className='col-lg-3 col-md-6'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Van'
                                                icon='/images/icons/van.png'
                                            />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-md-0 mt-3'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Saloon'
                                                icon='/images/icons/saloon.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Arriving Date' />
                                            </div>

                                            <DateTimeInput
                                                placeholder='29/08/2020'
                                                icon='/images/icons/calendar.png'
                                            />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Pick Up Time' />
                                            </div>
                                            <DateTimeInput
                                                placeholder='15.00'
                                                icon='/images/icons/clock.png'
                                            />
                                        </div>
                                    </div>

                                    <div className='row align-items-end mt-lg-0 mt-5'>
                                        <div className='col-lg-3 col-md-6'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='People Carrier'
                                                icon='/images/icons/carrier.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-3'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Luxury'
                                                icon='/images/icons/luxury.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Departing Date' />
                                            </div>

                                            <DateTimeInput
                                                placeholder='29/08/2020'
                                                icon='/images/icons/calendar.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Drop Off Time' />
                                            </div>
                                            <DateTimeInput
                                                placeholder='15.00'
                                                icon='/images/icons/clock.png'
                                            />
                                        </div>
                                    </div>
                                </div>
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
                                <div>
                                    <div className='row mb-3 align-items-end'>
                                        <div className='col-lg-3 col-md-6'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='People Carrier'
                                                icon='/images/icons/carrier.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-3'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Luxury'
                                                icon='/images/icons/luxury.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Departing Date' />
                                            </div>

                                            <DateTimeInput
                                                placeholder='29/08/2020'
                                                icon='/images/icons/calendar.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Drop Off Time' />
                                            </div>
                                            <DateTimeInput
                                                placeholder='15.00'
                                                icon='/images/icons/clock.png'
                                            />
                                        </div>
                                    </div>

                                    <div className='row align-items-end mt-lg-0 mt-5'>
                                        <div className='col-lg-3 col-md-6'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Van'
                                                icon='/images/icons/van.png'
                                            />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-md-0 mt-3'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Saloon'
                                                icon='/images/icons/saloon.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Arriving Date' />
                                            </div>

                                            <DateTimeInput
                                                placeholder='29/08/2020'
                                                icon='/images/icons/calendar.png'
                                            />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Pick Up Time' />
                                            </div>
                                            <DateTimeInput
                                                placeholder='15.00'
                                                icon='/images/icons/clock.png'
                                            />
                                        </div>
                                    </div>
                                </div>
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
                                <div>
                                    <div className='row mb-3 align-items-end'>
                                        <div className='col-lg-3 col-md-6'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Van'
                                                icon='/images/icons/van.png'
                                            />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-md-0 mt-3'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Saloon'
                                                icon='/images/icons/saloon.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Arriving Date' />
                                            </div>

                                            <DateTimeInput
                                                placeholder='29/08/2020'
                                                icon='/images/icons/calendar.png'
                                            />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Pick Up Time' />
                                            </div>
                                            <DateTimeInput
                                                placeholder='15.00'
                                                icon='/images/icons/clock.png'
                                            />
                                        </div>
                                    </div>

                                    <div className='row align-items-end mt-lg-0 mt-5'>
                                        <div className='col-lg-3 col-md-6'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='People Carrier'
                                                icon='/images/icons/carrier.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-3'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Luxury'
                                                icon='/images/icons/luxury.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Departing Date' />
                                            </div>

                                            <DateTimeInput
                                                placeholder='29/08/2020'
                                                icon='/images/icons/calendar.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Drop Off Time' />
                                            </div>
                                            <DateTimeInput
                                                placeholder='15.00'
                                                icon='/images/icons/clock.png'
                                            />
                                        </div>
                                    </div>
                                </div>
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
                                <div>
                                    <div className='row mb-3 align-items-end'>
                                        <div className='col-lg-3 col-md-6'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Van'
                                                icon='/images/icons/van.png'
                                            />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-md-0 mt-3'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Saloon'
                                                icon='/images/icons/saloon.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Arriving Date' />
                                            </div>

                                            <DateTimeInput
                                                placeholder='29/08/2020'
                                                icon='/images/icons/calendar.png'
                                            />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Pick Up Time' />
                                            </div>
                                            <DateTimeInput
                                                placeholder='15.00'
                                                icon='/images/icons/clock.png'
                                            />
                                        </div>
                                    </div>

                                    <div className='row align-items-end mt-lg-0 mt-5'>
                                        <div className='col-lg-3 col-md-6'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='People Carrier'
                                                icon='/images/icons/carrier.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-3'>
                                            <RadionInput
                                                radioValue='carType'
                                                text='Luxury'
                                                icon='/images/icons/luxury.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Departing Date' />
                                            </div>

                                            <DateTimeInput
                                                placeholder='29/08/2020'
                                                icon='/images/icons/calendar.png'
                                            />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <InfoText text='Drop Off Time' />
                                            </div>
                                            <DateTimeInput
                                                placeholder='15.00'
                                                icon='/images/icons/clock.png'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>

                    <div className='col-lg-12'>
                        <div className='reserve-now'>
                            <button className='shadow-btn'>Reserve</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
