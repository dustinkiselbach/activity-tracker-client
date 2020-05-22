import React, { useEffect, useContext } from 'react'
import ActivitiesContext from '../../context/activities/activitiesContext'

const Activity = ({ match }) => {
  const activitiesContext = useContext(ActivitiesContext)
  const { getActivity, activity } = activitiesContext

  useEffect(() => {
    getActivity(match.params.id)
  }, [])
  return activity && <div>{activity.strava_id}</div>
}

export default Activity
