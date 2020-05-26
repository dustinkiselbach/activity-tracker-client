import React from 'react'
import './main.css'

import Navbar from './components/layout/Navbar'
import Alerts from './components/layout/Alerts'
import Loading from './components/layout/Loading'
import LandingPage from './components/pages/LandingPage'
import FormPage from './components/pages/FormPage'
import IntergrationAuth from './components/pages/IntergrationAuth'
import Dashboard from './components/dashboard/Dashboard'
import Activity from './components/activity/Activity'

import UserState from './context/user/UserState'
import AlertState from './context/alert/AlertState'
import ActivitiesState from './context/activities/ActivitiesState'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/common/PrivateRoute'
import Spinner from './components/common/Spinner'

function App () {
  return (
    <AlertState>
      <UserState>
        <ActivitiesState>
          <Router>
            <Navbar />
            <Alerts />
            <Loading />
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
              <Route
                path='/auth/:provider/:token'
                component={IntergrationAuth}
              />
              {/* // TEST ROUTE */}
              <Route path='/test' component={Spinner} />

              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/activity/:id' component={Activity} />
            </Switch>
          </Router>
        </ActivitiesState>
      </UserState>
    </AlertState>
  )
}

export default App
