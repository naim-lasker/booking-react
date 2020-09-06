import React from 'react'
import { Router, Switch } from 'react-router-dom'
import Page from './Page'

import browserHistory from './history'

import LoginPage from '../pages/Auth/Login'
// import RouteWithLayout from './RouteWithLayout'
// import Main from '../layouts/Main'
// import Dashboard from '../pages/Dashboard/Home'





const Routes = () => {

    return (
        <Router history={browserHistory}>
            <Switch>
                {/* <RouteWithLayout
                    component={Dashboard}
                    exact
                    layout={Main}
                    path='/dashboard'
                /> */}

                {/* <LoginPage exact path='/login' title="Hi" /> */}
                <Page path="/login" component={LoginPage} title="Index" />
            </Switch>
        </Router>
    )
}

export default Routes

