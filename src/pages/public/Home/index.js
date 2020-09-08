import React, { Fragment } from "react"
import Header from "../../../layouts/Header"
import Footer from "../../../layouts/Footer"

const HomePage = () => {
    return (
        <Fragment>
            <Header />
                <div className="py-5 my-5">
                    <h3 className="text-center">Home page</h3>
                </div>
            <Footer />
        </Fragment>
    )
}

export default HomePage
