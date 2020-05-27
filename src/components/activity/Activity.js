import React, { useState, useEffect, useContext } from 'react'
import ActivitiesContext from '../../context/activities/activitiesContext'
import UserContext from '../../context/user/userContext'
import ActivityCard from './ActivityCard'
import ActivityMetrics from './ActivityMetrics'

const Activity = ({ match }) => {
  const activitiesContext = useContext(ActivitiesContext)
  const { getActivity, activity } = activitiesContext
  const userContext = useContext(UserContext)

  const [openCard, setOpen] = useState(true)

  useEffect(() => {
    if (!userContext.loading) {
      getActivity(match.params.id)
    }
  }, [userContext.loading])

  return (
    <>
      {activity && (
        <section className='activity-page'>
          <ActivityCard
            activity={activity}
            openCard={openCard}
            setOpen={setOpen}
          />
          <ActivityMetrics activity={activity} />
        </section>
      )}
    </>
  )
}

export default Activity
