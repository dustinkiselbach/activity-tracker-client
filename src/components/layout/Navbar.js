import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import UserContext from '../../context/user/userContext'
import classnames from 'classnames'
import NavUser from './NavUser'
import { AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const userContext = useContext(UserContext)

  const { isAuthenticated, logoutUser, user } = userContext

  const [toggleNav, setToggleNav] = useState(false)

  const showUserNav = e => {
    e.preventDefault()
    setToggleNav(!toggleNav)
  }

  const authLinks = (
    <>
      <li className='navbar__user--item'>
        <p>{user && user.email} </p>
        <span
          onClick={showUserNav}
          className={classnames('material-icons', {
            toggled: toggleNav
          })}
        >
          expand_more
        </span>
        <AnimatePresence>
          {toggleNav && <NavUser logoutUser={logoutUser} />}
        </AnimatePresence>
      </li>
    </>
  )

  const guestLinks = (
    <>
      <li className='navbar__user--item'>
        <Link to='/register'>Register</Link>
      </li>
      <li className='navbar__user--item'>
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
        {isAuthenticated && (
          <ul className='navbar__nav'>
            <li className='navbar__nav--item'>
              <NavLink to='/dashboard' activeClassName='active'>
                Dashboard
              </NavLink>
            </li>
            <li className='navbar__nav--item'>
              <NavLink to='/calendar'>Training</NavLink>
            </li>
            <li className='navbar__nav--item'>
              <a href='/#'>Explore</a>
            </li>
          </ul>
        )}

        <ul className='navbar__user'>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
