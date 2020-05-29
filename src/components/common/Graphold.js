import React from 'react'

import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const Graph = ({ splits }) => {
  const data = splits.map(split => ({
    key: split.split,
    pace: split.average_speed,
    hr: Math.round(split.average_heartrate),
    elev: split.elevation_difference
  }))

  return (
    <div className='graph'>
      <ResponsiveContainer width='99%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          label='fart'
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='key' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='pace'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' dataKey='hr' stroke='#82ca9d' label='bpm' />
          <Line type='monotone' dataKey='elev' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph
