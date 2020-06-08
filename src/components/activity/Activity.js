import React, { useState, useEffect, useContext } from 'react'
import ActivitiesContext from '../../context/activities/activitiesContext'
import UserContext from '../../context/user/userContext'
import ProfileContext from '../../context/profile/profileContext'
import ActivityCard from './ActivityCard'
import ActivityMetrics from './ActivityMetrics'

const Activity = ({ match }) => {
  const activitiesContext = useContext(ActivitiesContext)
  const {
    getActivity,
    activity,
    parseActivity,
    activityParsed
  } = activitiesContext
  const userContext = useContext(UserContext)
  const profileContext = useContext(ProfileContext)
  const { imperialToggle } = profileContext

  const [openCard, setOpen] = useState(true)

  useEffect(() => {
    if (!userContext.loading) {
      getActivity(match.params.id)
    }
  }, [userContext.loading])

  useEffect(() => {
    if (activity && !activityParsed) {
      console.log('from activity')
      parseActivity(activity, imperialToggle)
    }
  }, [activity, imperialToggle])

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
