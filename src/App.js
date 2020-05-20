import React, { Fragment } from 'react'
import './main.css'

import Navbar from './components/layout/Navbar'
import LoginPage from './components/pages/LoginPage'
import LandingPage from './components/pages/LandingPage'

import UserState from './context/user/UserState'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <UserState>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/login' exact component={LoginPage} />
        </Switch>
      </Router>
    </UserState>
  )
}

export default App
