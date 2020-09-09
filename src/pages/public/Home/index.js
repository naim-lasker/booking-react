import React, { Fragment } from "react"
import Header from "../../../layouts/Header"
import Footer from "../../../layouts/Footer"
import TabArea from "./TabArea"
import BannerArea from "./BannerArea"
import ActivityArea from "./ActivityArea"
import CategoryArea from "./CategoryArea"

export default () => {
    return (
        <Fragment>
            <Header />
            <TabArea />
            <BannerArea />
            <ActivityArea />
            <CategoryArea />
            <Footer />
        </Fragment>
    )
}
