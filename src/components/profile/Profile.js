import React, { useContext, useEffect } from 'react'
import ProfileUser from './ProfileUser'
import ProfileActivitiesSummary from './ProfileActivitesSummary'

import ProfileContext from '../../context/profile/profileContext'
import ActivitiesContext from '../../context/activities/activitiesContext'

const Profile = () => {
  const profileContext = useContext(ProfileContext)
  const { profile, getProfile } = profileContext

  const activitiesContext = useContext(ActivitiesContext)
  const { activities } = activitiesContext

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <section className='profile'>
      <div className='profile__top'>
        <div className='profile__top--user'>
          <ProfileUser profile={profile} />
        </div>
        <div className='profile__top--activities-summary'>
          <ProfileActivitiesSummary activities={activities} />
        </div>
      </div>
      <div className='profile__metrics'>METRICS PLACEHOLDER</div>
    </section>
  )
}

export default Profile
