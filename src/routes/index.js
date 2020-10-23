import React from "react"
import { Router, Switch } from "react-router-dom"
import Page from "./Page"

import browserHistory from "./history"

import RouteWithLayout from "./RouteWithLayout"
import ProviderMain from "../layouts/ProviderMain"
import UserMain from "../layouts/UserMain"
import ProviderMainNoSidebar from "../layouts/ProviderMainNoSidebar"

import ProviderSignIn from "../pages/Provider/SignIn"
import ProviderSignUp from "../pages/Provider/SignUp"

import ProviderBookingList from "../pages/Provider/Booking/List"
import ProviderCreateStore from "../pages/Provider/Store/Create"
import ProviderAddAccount from "../pages/Provider/Account/Add"
import ProviderEditProfile from "../pages/Provider/Profile/Edit"
import ProviderRatingList from "../pages/Provider/Rating/List"
import ProviderServiceCategory from "../pages/Provider/Service/Category"
import ProviderAddService from "../pages/Provider/Service/Add"
import ProviderServiceList from "../pages/Provider/Service/List"
import ProviderMenuCategory from "../pages/Provider/Menu/Category"
import ProviderAddMenu from "../pages/Provider/Menu/Add"
import ProviderMenuList from "../pages/Provider/Menu/List"
import ProviderWallet from "../pages/Provider/Wallet"
import ProviderProductList from "../pages/Provider/Product/List"
import ProviderAddProduct from "../pages/Provider/Product/Add"

import UserSignIn from "../pages/User/SignIn"
import UserSignUp from "../pages/User/SignUp"

import UserEditProfile from "../pages/User/Profile/Edit"
import UserAddCard from "../pages/User/Card/Add"
import UserAddAccount from "../pages/User/Account/Add"
import PromotionList from "../pages/User/Promotion/List"
import RestaurantList from "../pages/User/Restaurant/List"
import ToursExcursions from "../pages/User/ToursExcursions/List"
import WaterActivities from "../pages/User/WaterActivity/List"
import LandActivities from "../pages/User/LandActivity/List"

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
                    component={ProviderServiceCategory}
                    path='/provider-service-category'
                    title='Service Category'
                />
                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={ProviderAddService}
                    path='/provider-add-service'
                    title='Add Service'
                />
                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={ProviderServiceList}
                    path='/provider-service-list'
                    title='Service List'
                />
                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={ProviderMenuCategory}
                    path='/provider-menu-category'
                    title='Menu Category'
                />
                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={ProviderAddMenu}
                    path='/provider-add-menu'
                    title='Add Menu'
                />
                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={ProviderMenuList}
                    path='/provider-menu-list'
                    title='Add Menu'
                />
                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={ProviderWallet}
                    path='/provider-wallet'
                    title='Wallet'
                />
                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={ProviderProductList}
                    path='/provider-product-list'
                    title='Product List'
                />
                <RouteWithLayout
                    exact
                    layout={ProviderMain}
                    component={ProviderAddProduct}
                    path='/provider-add-product'
                    title='Add Product'
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
                    layout={UserMain}
                    component={UserEditProfile}
                    path='/user-edit-profile'
                    title='Edit Profile'
                />

                <RouteWithLayout
                    exact
                    layout={UserMain}
                    component={UserAddAccount}
                    path='/user-add-account'
                    title='Add Acount Details'
                />

                <RouteWithLayout
                    exact
                    layout={UserMain}
                    component={UserAddCard}
                    path='/user-add-card'
                    title='Add Card Details'
                />

                <RouteWithLayout
                    exact
                    layout={UserMain}
                    component={PromotionList}
                    path='/user-promotion-list'
                    title='Promotion'
                />

                <RouteWithLayout
                    exact
                    layout={UserMain}
                    component={RestaurantList}
                    path='/user-restaurant-list'
                    title='Promotion'
                />

                <RouteWithLayout
                    exact
                    layout={UserMain}
                    component={ToursExcursions}
                    path='/user-tours-list'
                    title='Promotion'
                />

                <RouteWithLayout
                    exact
                    layout={UserMain}
                    component={WaterActivities}
                    path='/user-water-list'
                    title='Promotion'
                />

                <RouteWithLayout
                    exact
                    layout={UserMain}
                    component={LandActivities}
                    path='/user-land-list'
                    title='Promotion'
                />
                <Page exact component={HomePage} path='/' title='Home' />
                <Page exact component={NewsPage} path='/news' title='News' />
            </Switch>
        </Router>
    )
}

export default Routes
