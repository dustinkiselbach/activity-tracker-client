import React, { useContext } from 'react'
import ProfileUser from './ProfileUser'
import ProfileActivitiesSummary from './ProfileActivitesSummary'

import UserContext from '../../context/user/userContext'
import ActivitiesContext from '../../context/activities/activitiesContext'

const Profile = () => {
  const userContext = useContext(UserContext)
  const { user } = userContext

  const activitiesContext = useContext(ActivitiesContext)
  const { activities } = activitiesContext

  return (
    <section className='profile'>
      <div className='profile__top'>
        <div className='profile__top--user'>
          <ProfileUser user={user} />
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
