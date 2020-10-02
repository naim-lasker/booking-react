import React from "react"
import { Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import Page from "./Page"
import auth from "../helpers/auth"

const providerInfo = auth.getProviderInfo()
const userInfo = auth.getUserInfo()

const RouteWithLayout = (props) => {
    const { layout: Layout, component: Component, ...rest } = props

    return (
        <Page
            {...rest}
            render={(matchProps) =>
                (userInfo && userInfo.token) ||
                (providerInfo && providerInfo.token) ? (
                    <Layout>
                        <Component />
                    </Layout>
                ) : (
                    <Redirect to='/' />
                )
            }
        />
    )
}

RouteWithLayout.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string,
}

export default RouteWithLayout
