import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/user/userContext'

const Navbar = () => {
  const userContext = useContext(UserContext)

  const { user, isAuthenticated, logoutUser } = userContext

  const authLinks = (
    <>
      <li className='navbar__dashboard--item'>
        <Link to='/feed'>Profile</Link>
      </li>
      <li className='navbar__dashboard--item'>
        <a href='/#' onClick={logoutUser}>
          Logout
        </a>
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
    <nav className='navbar'>
      <a href='/#' className='navbar__brand'>
        Acitvies Tracker
        <span className='material-icons'>explore</span>
      </a>
      <ul className='navbar__nav'>
        <li className='navbar__nav--item'>
          <a href='/#'>Test</a>
        </li>
        <li className='navbar__nav--item'>
          <a href='/#'>Test</a>
        </li>
        <li className='navbar__nav--item'>
          <a href='/#'>Test</a>
        </li>
      </ul>
      <ul className='navbar__dashboard'>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </nav>
  )
}

export default Navbar
