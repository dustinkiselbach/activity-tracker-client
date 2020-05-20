import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <section className='landing'>
      <div className='landing__top'>
        <h1 className='title'>Acivites Tracker</h1>
        <div className='landing__top--info-card'>
          <p className='lead'>Track your activies and live your best</p>

          <Link className='btn' to='/register'>
            Sign Up
          </Link>
        </div>
      </div>
      <div className='landing__bottom'>
        <div className='landing__bottom--info-card'>
          <span className='material-icons'>track_changes</span>
          <p className='lead'>Intergrates with all major fitness trackers</p>
        </div>
        <div className='landing__bottom--info-card'>
          <span className='material-icons'>assessment</span>
          <p className='lead'>Get enhanced analytics</p>
        </div>
        <div className='landing__bottom--info-card'>
          <span className='material-icons'>group</span>
          <p className='lead'>Follow your friends activities</p>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
