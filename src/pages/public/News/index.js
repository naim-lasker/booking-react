import React, { Fragment } from "react"
import Header from "../../../layouts/Header"
import Footer from "../../../layouts/Footer"
import Heading from "../../../components/Public/News/Heading"
import TopSlider from "./TopSlider"

export default () => {
    return (
        <Fragment>
            <Header />
            
            <Heading />
            <TopSlider />

            <Footer />
        </Fragment>
    )
}
