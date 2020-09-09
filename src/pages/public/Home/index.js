import React, { Fragment, useState } from "react"
import Header from "../../../layouts/Header"
import Footer from "../../../layouts/Footer"
import { Tabs, Tab } from "react-bootstrap"
import TabHeading from "../../../components/Home/TabHeading"
import RadionInput from "../../../components/Home/RadionInput"
import DateTimeInput from "../../../components/Home/DateTimeInput"

const HomePage = () => {
    return (
        <Fragment>
            <Header />

            <section className='home-booking-area pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <Tabs defaultActiveKey='flight' transition={false}>
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
                                    <div className='row mb-3 align-items-end'>
                                        <div className='col-lg-3 col-md-6'>
                                            <RadionInput />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-md-0 mt-3'>
                                            <RadionInput />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <p className='mb-0 tab-top-text'>
                                                    Arriving Date
                                                </p>
                                                <button className='question-icon ml-3'>
                                                    ?
                                                </button>
                                            </div>

                                            <DateTimeInput />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <p className='mb-0 tab-top-text'>
                                                    Pick Up Time
                                                </p>
                                                <button className='question-icon ml-3'>
                                                    ?
                                                </button>
                                            </div>
                                            <DateTimeInput />
                                        </div>
                                    </div>

                                    <div className='row align-items-end mt-lg-0 mt-5'>
                                        <div className='col-lg-3 col-md-6'>
                                            <RadionInput />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-3'>
                                            <RadionInput />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <p className='mb-0 tab-top-text'>
                                                    Departing Date
                                                </p>
                                                <button className='question-icon ml-3'>
                                                    ?
                                                </button>
                                            </div>

                                            <DateTimeInput />
                                        </div>

                                        <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                                <p className='mb-0 tab-top-text'>
                                                    Drop Off Time
                                                </p>
                                                <button className='question-icon ml-3'>
                                                    ?
                                                </button>
                                            </div>
                                            <DateTimeInput />
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
                                    <p>profile</p>
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
                                    <p>contact</p>
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
                                    <p>contact</p>
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
                                    <p>contact</p>
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

            <Footer />
        </Fragment>
    )
}

export default HomePage
