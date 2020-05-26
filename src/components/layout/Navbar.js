import React, { useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/user/userContext'
import AlertContext from '../../context/alert/alertContext'
import classnames from 'classnames'

const Navbar = () => {
  const userContext = useContext(UserContext)

  const { isAuthenticated, logoutUser } = userContext

  const alertContext = useContext(AlertContext)

  const { setAlert } = alertContext

  const authLinks = (
    <>
      <li className='navbar__dashboard--item'>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li className='navbar__dashboard--item'>
        <Link to='/login' onClick={logoutUser}>
          Logout
        </Link>
      </li>
    </>
  )

  const guestLinks = (
    <>
      <li className='navbar__dashboard--item'>
        <Link to='/register'>Register</Link>
      </li>
      <li className='navbar__dashboard--item'>
        <Link to='/login'>Login</Link>
      </li>
    </>
  )

  return (
    <>
      <nav className='navbar'>
        <a href='/#' className='navbar__brand'>
          Acitvies Tracker
          <span className='material-icons'>explore</span>
        </a>
        <ul className='navbar__nav'>
          {/* EXAMPLE OF POSSIBLE ALERT */}
          <li
            onClick={e => {
              e.preventDefault()
              setAlert('This is a sample alert for test', 'info')
            }}
            className='navbar__nav--item'
          >
            <a href='/#'>Alert</a>
          </li>
          {/* EXAMPLE OF POSSIBLE DROPDOWN MENU */}
          <li className='navbar__nav--item'>
            <a href='/#'>fart &darr;</a>
            <li className='sublist'>
              <ul>fart</ul>
              <ul>farting again</ul>
              <ul>farting thrice</ul>
            </li>
          </li>
          {/* EXAMPLE END */}
          <li className='navbar__nav--item'>
            <a href='/#'>Test</a>
          </li>
        </ul>
        <ul className='navbar__dashboard'>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
