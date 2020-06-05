import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/user/userContext'

const LandingPage = ({ location, history }) => {
  const userContext = useContext(UserContext)

  const { confirmAccount, isAuthenticated } = userContext

  const qs = new URLSearchParams(location.search)

  useEffect(() => {
    if (qs.get('confirmation_token')) {
      confirmAccount(qs.get('confirmation_token'))

      history.push('/login')
    } else if (qs.get('reset_password_token')) {
      history.push(`/reset-password/${qs.get('reset_password_token')}`)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/dashboard')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  return (
    <section className='landing'>
      <div className='landing__top'>
        <h1 className='title'>Acivities Tracker</h1>
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
