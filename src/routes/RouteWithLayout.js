import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Page from './Page'

const authService = () => {
  return true
}

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props

  return (
    <Page
        {...rest}
        render={matchProps => 
          authService ? (
            <Layout>
              <Component {...matchProps} />
            </Layout>
          ) : (
            <Redirect to="/" />
          )
        }
      />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
