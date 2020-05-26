import React from 'react'

const DashboardSidebar = ({ user }) => {
  return (
    <div className='sidebar__main my-2'>
      <img src='http://203.153.40.19/bct/img/user.png' alt='' />
      <h4>{user.email}</h4>
      <h5>placeholder</h5>
      <h6>more shit...</h6>
    </div>
  )
}

export default DashboardSidebar
