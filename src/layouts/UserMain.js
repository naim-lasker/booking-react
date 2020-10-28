import React, { Fragment } from "react"
import { ToastContainer } from "react-toastify"
import Header from "./Header"
import Footer from "./Footer"
import UserSidebar from "./UserSidebar"

const UserMain = ({ children }) => {
    return (
        <Fragment>
            <ToastContainer />
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-4'>
                        <UserSidebar />
                    </div>
                    <div className='col-xl-9 col-lg-8'>{children}</div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default UserMain
