import React, { useState, useEffect, useContext } from 'react'
import ActivitiesContext from '../../context/activities/activitiesContext'
import ActivityCard from './ActivityCard'
import ActivityMetrics from './ActivityMetrics'

const Activity = ({ match }) => {
  const activitiesContext = useContext(ActivitiesContext)
  const { getActivity, activity } = activitiesContext

  const [openCard, setOpen] = useState(true)

  useEffect(() => {
    getActivity(match.params.id)
  }, [])
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
