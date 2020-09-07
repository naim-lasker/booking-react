import React, { Fragment } from "react"
import Header from "./Header"
import Footer from "./Footer"

const Main = (props) => {
    const { children } = props

    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Main
