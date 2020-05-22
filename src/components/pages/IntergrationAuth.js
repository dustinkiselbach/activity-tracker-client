import React, { useEffect, useContext } from 'react'
import ActivitiesContext from '../../context/activities/activitiesContext'
import UserContext from '../../context/user/userContext'

const IntergrationAuth = ({ location }) => {
  const activitiesContext = useContext(ActivitiesContext)
  const userContext = useContext(UserContext)

  const qs = new URLSearchParams(location.search)

  useEffect(() => {
    if (userContext.isAuthenticated) {
      activitiesContext.intergrateStrava(qs.get('code'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userContext.isAuthenticated])
  return <div></div>
}

export default IntergrationAuth
