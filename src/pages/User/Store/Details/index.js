import React, { Fragment, useEffect, useState } from "react"
import { Tab, Tabs } from "react-bootstrap"
import { FaStar, FaStarHalf } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { CustomLoader } from "../../../../components/UI/Loader"
import StoreBanner from "../../../../components/User/Store/Detals/Banner"
import CustomerReviews from "../../../../components/User/Store/Detals/CustomerReviews"
import StoreOrder from "../../../../components/User/Store/Detals/Order"
import ProductTab from "../../../../components/User/Store/Detals/ProductTab"
import ProReviews from "../../../../components/User/Store/Detals/ProReviews"
import ServiceTab from "../../../../components/User/Store/Detals/ServiceTab"
import { notify } from "../../../../helpers/ui"
import Footer from "../../../../layouts/Footer"
import Header from "../../../../layouts/Header"
import { getCustomerStoreDetails } from "../../../../services/store"

const UserServiceDetails = () => {
    const dispatch = useDispatch()
    const [store, setStore] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getStoreDetails()
    }, [])

    const getStoreDetails = () => {
        dispatch(
            getCustomerStoreDetails(41, (res, err) => {
                setLoading(false)

                if (res && res.data.status == "success") {
                    setStore(res.data.storeDetails)
                } else if (err) {
                    notify("error", "Something went wrong")
                }
            })
        )
    }
    return (
        <Fragment>
            <Header />

            <section className='service-area'>
                <div className='container'>
                    <div className='service-area-container'>
                        <div className='service-content-container'>
                            <StoreBanner />

                            <div className='row justify-content-center'>
                                <div className='col-lg-10'>
                                    <div className='service-content'>
                                        {!loading ? (
                                            <Fragment>
                                                <div className='d-md-flex justify-content-lg-between mb-2 flex-lg-row flex-column'>
                                                    <h1 className='service-header mb-lg-0 mb-3'>
                                                        {store.company_name}
                                                    </h1>
                                                    <h4 className='align-self-lg-end service-open'>
                                                        Opening Hour :
                                                        <span className='para-text'>
                                                            7P.M to 10P.M
                                                        </span>
                                                    </h4>
                                                    <div className='align-self-lg--end mt-lg-0 mt-2'>
                                                        <img
                                                            src='/images/icons/email.png'
                                                            alt=''
                                                        />
                                                        <img
                                                            className='ml-3'
                                                            src='/images/icons/heart.png'
                                                            alt=''
                                                        />
                                                    </div>
                                                </div>
                                                <h4 className='location'>
                                                    Location:
                                                    <span className='para-text'>
                                                        {" "}
                                                        {store.address}
                                                    </span>
                                                </h4>

                                                <div className='row justify-content-center'>
                                                    <div className='col-lg-9'>
                                                        <div className='mb-5 para-content'>
                                                            <p className='para-text'>
                                                                {
                                                                    store.about_com
                                                                }
                                                            </p>

                                                            <div className='booking-schedule d-md-flex mt-2'>
                                                                <div className='booking-date'>
                                                                    <div className='d-flex justify-content-center align-items-center mb-2'>
                                                                        <p className='mb-0 booking-header'>
                                                                            Booking
                                                                            Date
                                                                        </p>
                                                                        <button className='question-icon ml-3'>
                                                                            ?
                                                                        </button>
                                                                    </div>
                                                                    <div className='input-group align-items-center'>
                                                                        <input
                                                                            type='text'
                                                                            className='form-control input-box py-2 border-right-0 datepicker mt-0'
                                                                            placeholder='29/08/2020'
                                                                        />
                                                                        <span className='input-group-append'>
                                                                            <div className='input-group-text bg-transparent'>
                                                                                <img
                                                                                    src='/images/icons/calendar.png'
                                                                                    alt=''
                                                                                />
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className='booking-time mt-md-0 mt-3'>
                                                                    <div className='d-flex justify-content-center align-items-center mb-2'>
                                                                        <p className='mb-0 booking-header'>
                                                                            Booking
                                                                            Time
                                                                        </p>
                                                                        <button className='question-icon ml-3'>
                                                                            ?
                                                                        </button>
                                                                    </div>
                                                                    <div className='input-group align-items-center'>
                                                                        <input
                                                                            type='text'
                                                                            className='form-control input-box py-2 border-right-0'
                                                                            placeholder='15.00'
                                                                        />
                                                                        <span className='input-group-append'>
                                                                            <div className='input-group-text bg-transparent'>
                                                                                <img
                                                                                    src='/images/icons/clock.png'
                                                                                    alt=''
                                                                                />
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-8 mb-5 mb-lg-0 px-lg-0'>
                                                        <iframe
                                                            className='img-fluid video-img'
                                                            src='https://www.youtube.com/embed/tgbNymZ7vqY'
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        ) : (
                                            <div className='border px-3 mb-4 rounded'>
                                                <CustomLoader />
                                            </div>
                                        )}
                                        <div className='row'>
                                            <div className='col-lg-11 shadow-tab'>
                                                <Tabs defaultActiveKey='services'>
                                                    <Tab
                                                        eventKey='services'
                                                        title={
                                                            <span className='d-block d-flex justify-content-center align-items-center h-100 active'>
                                                                Services
                                                            </span>
                                                        }
                                                    >
                                                        <ServiceTab />
                                                    </Tab>
                                                    <Tab
                                                        eventKey='products'
                                                        title={
                                                            <span className='d-block d-flex justify-content-center align-items-center h-100 active'>
                                                                Products
                                                            </span>
                                                        }
                                                    >
                                                        <ProductTab />
                                                    </Tab>
                                                    <Tab
                                                        eventKey='customerReviews'
                                                        title={
                                                            <span className='d-block d-flex flex-column justify-content-center'>
                                                                <span>
                                                                    Customer
                                                                    Reviews
                                                                    <span className='question-icon ml-2'>
                                                                        ?
                                                                    </span>
                                                                </span>
                                                                <span className='stars'>
                                                                    <FaStar className='single-promotion-star' />
                                                                    <FaStar className='single-promotion-star' />
                                                                    <FaStar className='single-promotion-star' />
                                                                    <FaStar className='single-promotion-star' />
                                                                    <FaStarHalf className='single-promotion-star' />
                                                                    <span className='single-promotion-rating'>
                                                                        (4.5)
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        }
                                                    >
                                                        <CustomerReviews />
                                                    </Tab>
                                                    <Tab
                                                        eventKey='proReviews'
                                                        title={
                                                            <span className='d-block d-flex flex-column justify-content-center'>
                                                                <span>
                                                                    Pro Reviews
                                                                    <span className='question-icon ml-2'>
                                                                        ?
                                                                    </span>
                                                                </span>
                                                                <span className='stars'>
                                                                    <FaStar className='single-promotion-star' />
                                                                    <FaStar className='single-promotion-star' />
                                                                    <FaStar className='single-promotion-star' />
                                                                    <FaStar className='single-promotion-star' />
                                                                    <FaStarHalf className='single-promotion-star' />
                                                                    <span className='single-promotion-rating'>
                                                                        (4.5)
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        }
                                                    >
                                                        <ProReviews />
                                                    </Tab>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <StoreOrder />
                    </div>
                </div>
            </section>

            <Footer />
        </Fragment>
    )
}

export default UserServiceDetails
