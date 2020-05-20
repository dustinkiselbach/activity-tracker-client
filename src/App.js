import React from 'react'
import './main.css'

import Navbar from './components/layout/Navbar'
import LandingPage from './components/pages/LandingPage'
import FormPage from './components/pages/FormPage'

import UserState from './context/user/UserState'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <UserState>
      <Router>
        <Navbar />
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
            path='/confirm-email'
            render={props => <FormPage confirmEmail={true} {...props} />}
          />
        </Switch>
      </Router>
    </UserState>
  )
}

export default App
