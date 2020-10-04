import React from "react"
import { Router, Switch } from "react-router-dom"
import Page from "./Page"

import browserHistory from "./History"

import RouteWithLayout from "./RouteWithLayout"
import ProviderMain from "../layouts/ProviderMain"
import ProviderMainNoSidebar from "../layouts/ProviderMainNoSidebar"

import ProviderSignIn from "../pages/Provider/SignIn"
import ProviderSignUp from "../pages/Provider/SignUp"

import ProviderBookingList from "../pages/Provider/Booking/List"
import ProviderCreateStore from "../pages/Provider/Store/Create"
import ProviderAddAccount from "../pages/Provider/Account/Add"
import ProviderEditProfile from "../pages/Provider/Profile/Edit"
import ProviderRatingList from "../pages/Provider/Rating/List"
import ProviderServiceCategoryList from "../pages/Provider/Service/CategoryList"

import UserSignIn from "../pages/User/SignIn"
import UserSignUp from "../pages/User/SignUp"

import UserAddAccount from "../pages/User/Account/Add"
import UserPromotionDeals from "../pages/User/Promotion/Deals"

import HomePage from "../pages/public/Home"
import NewsPage from "../pages/public/News"

const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Switch>
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
                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={ProviderBookingList}
                    path='/provider-booking'
                    title='Booking List'
                />
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
                    component={ProviderAddAccount}
                    path='/provider-add-account'
                    title='Add Acount Details'
                />
                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={ProviderEditProfile}
                    path='/provider-edit-profile'
                    title='Edit Profile'
                />
                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={ProviderRatingList}
                    path='/provider-rating'
                    title='My Ratings'
                />
                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={ProviderServiceCategoryList}
                    path='/provider-service-category-list'
                    title='Service Category'
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
                    component={UserAddAccount}
                    path='/user-add-account'
                    title='Add Acount Details'
                />

                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={UserPromotionDeals}
                    path='/promotion'
                    title='Promotion'
                />
                <Page exact component={HomePage} path='/' title='Home' />
                <Page exact component={NewsPage} path='/news' title='News' />
            </Switch>
        </Router>
    )
}

export default Routes
