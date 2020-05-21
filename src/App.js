import React from 'react'
import './main.css'

import Navbar from './components/layout/Navbar'
import Alerts from './components/layout/Alerts'
import LandingPage from './components/pages/LandingPage'
import FormPage from './components/pages/FormPage'

import UserState from './context/user/UserState'
import AlertState from './context/alert/AlertState'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/common/PrivateRoute'

function App () {
  return (
    <AlertState>
      <UserState>
        <Router>
          <Navbar />
          <Alerts />
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route
              path='/login'
              render={props => <FormPage login={true} {...props} />}
            />
            <Route
              path='/register'
              render={props => <FormPage register={true} {...props} />}
            />
            <Route
              path='/reset-password/:token'
              render={props => <FormPage resetPassword={true} {...props} />}
            />
            <Route
              path='/reset-password/'
              render={props => <FormPage resetPassword={true} {...props} />}
            />
            <Route
              path='/confirm-email/:email'
              render={props => <FormPage confirmEmail={true} {...props} />}
            />
            <PrivateRoute
              exact
              path='/feed'
              component={() => <div>fart</div>}
            />
          </Switch>
        </Router>
      </UserState>
    </AlertState>
  )
}

export default App
