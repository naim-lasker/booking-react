import React, { Fragment } from "react"
import Header from "./Header"
import Footer from "./Footer"

const ProviderMain = (props) => {
    const { children } = props

    return (
        <Fragment>
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
