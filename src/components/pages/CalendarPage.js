import React, { useState, useEffect, useContext } from 'react'
import TrainingCalendarHeader from '../trainingCalendar/TrainingCalendarHeader'
import TrainingCalendar from '../trainingCalendar/TrainingCalendar'
import ActivitiesContext from '../../context/activities/activitiesContext'

const CalendarPage = ({ year = 2020 }) => {
  const [selected, setSelected] = useState('activity_time')

  const activitiesContext = useContext(ActivitiesContext)

  const {
    getActivitiesByDate,
    activitiesForCalendar,
    loading
  } = activitiesContext

  useEffect(() => {
    getActivitiesByDate()
  }, [])

  console.log(selected)

  return (
    <>
      {!loading && activitiesForCalendar && (
        <section className='calendar-page'>
          <h1 className='title'>Training Calendar</h1>
          <h3>
            <span className='material-icons'>keyboard_arrow_left</span>2020
            <span className='material-icons'>keyboard_arrow_right</span>
          </h3>
          <TrainingCalendarHeader
            activitiesForCalendar={activitiesForCalendar}
            selected={selected}
            changeSelected={type => setSelected(type)}
          />
          <TrainingCalendar
            activitiesForCalendar={activitiesForCalendar}
            selected={selected}
          />
        </section>
      )}
    </>
  )
}

export default CalendarPage
