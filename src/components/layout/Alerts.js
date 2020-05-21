import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alerts = () => {
  const alertContext = useContext(AlertContext)
  console.log(alertContext.alerts)
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id} className='alerts'>
        <h2>{alert.msg}</h2>
      </div>
    ))
  )
}

export default Alerts
