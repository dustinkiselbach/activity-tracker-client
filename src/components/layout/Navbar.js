import React from 'react'

const Navbar = () => {
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
        <li className='navbar__dashboard--item'>
          <a href='/#'>User</a>
        </li>
        <li className='navbar__dashboard--item'>
          <a href='/#'>Notifications</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
