import React from 'react'
import TrainingCalendarHeader from '../trainingCalendar/TrainingCalendarHeader'
import TrainingCalendar from '../trainingCalendar/TrainingCalendar'

const dummyData = {
  time: 50,
  distance: 50,
  records: 1,
  activities: 40
}

const CalendarPage = () => {
  return (
    <section className='calendar-page'>
      <h1 className='title'>Training Calendar</h1>
      <TrainingCalendarHeader />
      <TrainingCalendar />
    </section>
  )
}

export default CalendarPage
