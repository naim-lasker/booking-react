import React, { Fragment } from "react"
import { ToastContainer } from "react-toastify"
import Header from "./Header"
import Footer from "./Footer"

const ProviderMain = (props) => {
    const { children } = props

    return (
        <Fragment>
            <ToastContainer />
            <Header />
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8'>{children}</div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default ProviderMain
