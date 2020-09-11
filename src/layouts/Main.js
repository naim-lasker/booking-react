import React, { Fragment } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Pagination from "../components/UI/Pagination"

const Main = (props) => {
    const { children } = props

    return (
        <Fragment>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 pr-lg-0'>
                        <Sidebar />
                    </div>

                    {children}
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Main
