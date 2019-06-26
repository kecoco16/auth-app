// @flow
import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

// Screens.
import { Login, Home, NoMatch } from 'screens'

// Components.
import { CustomRoute } from 'components'

function RouterComponent() {
  return (
    <Router>
      <Switch>
        <CustomRoute path='/home' component={Home} isPrivate />
        <CustomRoute exact path='/' component={Login} isLogin />
        <CustomRoute component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default RouterComponent
