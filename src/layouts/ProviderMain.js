import React, { Fragment } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

const ProviderMain = (props) => {
    const { children } = props

    return (
        <Fragment>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 pr-lg-0'>
                        <Sidebar />
                    </div>
                    <div className='col-lg-9'>{children}</div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default ProviderMain
