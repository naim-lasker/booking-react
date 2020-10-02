import React from "react"
import { Router, Switch } from "react-router-dom"
import Page from "./Page"

import browserHistory from "./History"

import RouteWithLayout from "./RouteWithLayout"
import ProviderMain from "../layouts/ProviderMain"
import ProviderMainNoSidebar from "../layouts/ProviderMainNoSidebar"

import ProviderSignIn from "../pages/Provider/SignIn"
import ProviderSignUp from "../pages/Provider/SignUp"
import AddProviderAccount from "../pages/Provider/Account/Add"

import UserSignIn from "../pages/User/SignIn"
import UserSignUp from "../pages/User/SignUp"
import AddUserAccount from "../pages/User/Account/Add"

import HomePage from "../pages/public/Home"
import NewsPage from "../pages/public/News"
import PromotionDealsPage from "../pages/User/Promotion/Deals"
import ProviderCreateStore from "../pages/Provider/Store/Create"

const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Switch>
                <RouteWithLayout
                    exact
                    layout={ProviderMainNoSidebar}
                    component={ProviderCreateStore}
                    path='/provider-create-store'
                    title='Create Store'
                />
                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={AddProviderAccount}
                    path='/provider-add-account'
                    title='Add Acount Details'
                />

                <Page
                    exact
                    component={UserSignIn}
                    path='/user-signin'
                    title='Sign In'
                />
                <Page
                    exact
                    component={UserSignUp}
                    path='/user-signup'
                    title='Sign Up'
                />
                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={AddUserAccount}
                    path='/user-add-account'
                    title='Add Acount Details'
                />

                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={PromotionDealsPage}
                    path='/promotion'
                    title='Promotion'
                />

                <Page
                    exact
                    component={ProviderSignIn}
                    path='/provider-signin'
                    title='Sign In'
                />
                <Page
                    exact
                    component={ProviderSignUp}
                    path='/provider-signup'
                    title='Sign Up'
                />
                <Page exact component={HomePage} path='/' title='Home' />
                <Page exact component={NewsPage} path='/news' title='News' />
            </Switch>
        </Router>
    )
}

export default Routes
