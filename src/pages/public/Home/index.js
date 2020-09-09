import React, { Fragment } from "react"
import Header from "../../../layouts/Header"
import Footer from "../../../layouts/Footer"
import TabArea from "./TabArea"
import BannerArea from "./BannerArea"
import ActivityArea from "./ActivityArea"

export default () => {
    return (
        <Fragment>
            <Header />

            <TabArea />
            <BannerArea />
            <ActivityArea />

            <Footer />
        </Fragment>
    )
}
