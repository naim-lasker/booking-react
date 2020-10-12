import React, { Fragment } from "react"
import { ToastContainer } from "react-toastify"
import Header from "./Header"
import Footer from "./Footer"
import UserSidebar from "./UserSidebar"

const UserMain = (props) => {
    const { children } = props

    return (
        <Fragment>
            <ToastContainer />
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 pr-lg-0'>
                        <UserSidebar />
                    </div>
                    <div className='col-lg-9'>{children}</div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default UserMain
