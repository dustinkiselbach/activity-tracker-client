import React, { useContext } from 'react'
import Spinner from '../common/Spinner'
import ActivitiesContext from '../../context/activities/activitiesContext'
import UserContext from '../../context/user/userContext'

const Loading = () => {
  const activitiesContext = useContext(ActivitiesContext)
  const userContext = useContext(UserContext)
  return (
    <>
      {activitiesContext.loading || userContext.authenticating ? (
        <div className='loading-overlay'>
          <Spinner />
        </div>
      ) : null}
    </>
  )
}

export default Loading
