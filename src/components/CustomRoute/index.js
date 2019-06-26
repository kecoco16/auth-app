// @flow
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// Utils.
import { auth } from 'utils'

function CustomRoute({
  component: Component,
  isPrivate = false,
  isLogin = false,
  ...rest
}: {
  component: React.Node,
  isPrivate: boolean,
  isLogin: boolean,
  rest: Object
}) {
  return (
    <Route
      {...rest}
      render={(props: Object) => {
        if (isPrivate) {
          const isAuth = auth.isValid()
          return isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/' }} />
          )
        }

        if (isLogin) {
          const isAuth = auth.isValid()
          return isAuth ? (
            <Redirect to={{ pathname: '/Home' }} />
          ) : (
            <Component {...props} />
          )
        }

        return <Component {...props} />
      }}
    />
  )
}

export default CustomRoute
