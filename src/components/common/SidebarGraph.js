import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'
// import { smallGraphStyle } from '../style/graphStyle'

const SidebarGraph = ({ last7Activities }) => {
  const data = last7Activities.map((item, index) => ({
    y: item.avg_hr,
    x: index
  }))

  //   const style = graphStyle()

  //   console.log(data)
  return (
    <>
      <VictoryChart
        style={{
          labels: { fontSize: 2 },
          parent: { border: '1px solid #ccc' }
        }}
      >
        <VictoryBar
          domain={{
            y: [
              Math.min(...data.map(item => item.y)),
              Math.max(...data.map(item => item.y))
            ],
            x: [0, 8]
          }}
          data={data}
          style={{
            data: { fill: 'tomato', opacity: 0.7 }
          }}
        />
      </VictoryChart>
    </>
  )
}

export default SidebarGraph
