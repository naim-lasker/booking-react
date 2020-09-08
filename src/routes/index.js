import React from "react"
import { Router, Switch } from "react-router-dom"
import Page from "./Page"

import browserHistory from "./history"

import RouteWithLayout from "./RouteWithLayout"
import Main from "../layouts/Main"


import HomePage from "../pages/public/Home"
import LoginPage from "../pages/Auth/Login"
import PromotionDealsPage from "../pages/Customer/Promotion/Deals"

const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Switch>
                <Page exact component={HomePage} path='/' title='Home' />
                <Page exact component={LoginPage} path='/login' title='Login' />
                <RouteWithLayout
                    component={PromotionDealsPage}
                    exact
                    layout={Main}
                    path='/promotion'
                    title='Promotion'
                />

                {/* <Page path="/login" component={LoginPage} title="Index" /> */}
            </Switch>
        </Router>
    )
}

export default Routes
