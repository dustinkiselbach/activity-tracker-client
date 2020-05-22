import React, { useEffect, useContext } from 'react'
import ActivitiesContext from '../../context/activities/activitiesContext'
import UserContext from '../../context/user/userContext'

import DashboardActivities from './DashboardActivities'
import Spinner from '../common/Spinner'

const stravaURL =
  'https://www.strava.com/oauth/authorize?client_id=47703&redirect_uri=http://localhost:3000/auth/strava/code&response_type=code&scope=activity:read_all,activity:write'

const Dashboard = () => {
  const activitiesContext = useContext(ActivitiesContext)
  const {
    activities,
    syncActivities,
    loading,
    getActivities
  } = activitiesContext

  const userContext = useContext(UserContext)
  const { user } = userContext

  useEffect(() => {
    syncActivities()
    getActivities()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='dashboard'>
      {loading ? (
        <Spinner />
      ) : activities.length === 0 ? (
        // there are no activities
        <div>
          You have no activities, please intergrate{' '}
          <a href={stravaURL} className='btn'>
            Intergrate
          </a>
        </div>
      ) : (
        // there are activities
        <>
          <DashboardActivities activities={activities} user={user} />
        </>
      )}
    </section>
  )
}

export default Dashboard
