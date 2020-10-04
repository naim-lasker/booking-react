import React, { Fragment } from "react"
import { ToastContainer } from "react-toastify"
import Header from "./Header"
import Footer from "./Footer"
import CustomerSidebar from "./CustomerSidebar"

const CustomerMain = (props) => {
    const { children } = props

    return (
        <Fragment>
            <ToastContainer />
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 pr-lg-0'>
                        <CustomerSidebar />
                    </div>
                    <div className='col-lg-9'>{children}</div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default CustomerMain
