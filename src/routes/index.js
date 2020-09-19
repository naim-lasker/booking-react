import React from "react"
import { Router, Switch } from "react-router-dom"
import Page from "./Page"

import browserHistory from "./History"

import RouteWithLayout from "./RouteWithLayout"
import Main from "../layouts/Main"


import SignInPage from "../pages/SignIn"
import ProviderSignIn from "../pages/Provider/SignUp"
import UserSignIn from "../pages/User/SignUp"
import AddUserAccount from "../pages/User/Account/Add"
import HomePage from "../pages/public/Home"
import NewsPage from "../pages/public/News"
import PromotionDealsPage from "../pages/User/Promotion/Deals"

const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Switch>
                <Page exact component={SignInPage} path='/login' title='Sign In' />
                <Page exact component={ProviderSignIn} path='/provider-signup' title='Sign Up' />
                <Page exact component={UserSignIn} path='/user-signup' title='Sign Up' />
                <Page exact component={AddUserAccount} path='/user-add-account' title='Add Acount Details' />
                <Page exact component={HomePage} path='/' title='Home' />
                <Page exact component={NewsPage} path='/news' title='News' />
                <RouteWithLayout
                    component={PromotionDealsPage}
                    exact
                    layout={Main}
                    path='/promotion'
                    title='Promotion'
                />
            </Switch>
        </Router>
    )
}

export default Routes
