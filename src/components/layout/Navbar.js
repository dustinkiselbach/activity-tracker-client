import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import UserContext from '../../context/user/userContext'
import AlertContext from '../../context/alert/alertContext'

const Navbar = () => {
  const userContext = useContext(UserContext)

  const { isAuthenticated, logoutUser } = userContext

  const alertContext = useContext(AlertContext)

  const { setAlert } = alertContext

  const authLinks = (
    <>
      <li className='navbar__dashboard--item'>
        <NavLink to='/dashboard' activeClassName='selected'>
          Dashboard
        </NavLink>
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
            <a href='/#'>fart</a>
            {/* <ul className='sublist'>
              <li>
                <a href='#/'>testlink</a>
              </li>
              <li>
                <a href='#/'>testlink</a>
              </li>
              <li>
                <a href='#/'>farting69</a>
              </li>
            </ul> */}
          </li>
          {/* EXAMPLE END */}
          <li className='navbar__nav--item'>
            <a href='/#'>fart</a>
            {/* <ul className='sublist'>
              <li>
                <a href='#/'>testlink</a>
              </li>
              <li>
                <a href='#/'>cheese</a>
              </li>
              <li>
                <a href='#/'>wookie</a>
              </li>
            </ul> */}
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
