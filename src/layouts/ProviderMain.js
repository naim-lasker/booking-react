import React, { Fragment } from "react"
import { ToastContainer } from "react-toastify"
import Header from "./Header"
import Footer from "./Footer"
import ProviderSidebar from "./ProviderSidebar"

const ProviderMain = ({ children }) => {
    return (
        <Fragment>
            <ToastContainer />
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 pr-lg-0'>
                        <ProviderSidebar />
                    </div>
                    <div className='col-lg-9'>{children}</div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default ProviderMain
