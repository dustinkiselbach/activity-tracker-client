import React from 'react'

const Table = ({ splits, paceUnit }) => {
  return (
    <table className='splits-table'>
      <caption>Splits</caption>
      <thead>
        <tr>
          <th>mile</th>
          <th>pace</th>
          <th>hr</th>
          <th>elev</th>
        </tr>
      </thead>
      <tbody>
        {splits.map(split => (
          <tr key={split.split}>
            <th>{split.split}</th>
            <th>
              {split.pace} {paceUnit}
            </th>
            <th>{Math.round(split.average_heartrate)} bpm</th>
            <th>{split.elevation_difference} m</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
