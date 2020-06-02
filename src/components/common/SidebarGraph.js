import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory'
import { graphStyle } from '../style/graphStyle'

const SidebarGraph = ({ last7Activities }) => {
  const data = last7Activities.map((item, index) => ({
    y: item.avg_hr,
    x: index + 1
  }))

  const style = graphStyle()
  return (
    <>
      <VictoryChart domainPadding={10}>
        <VictoryLabel
          x={225}
          y={25}
          textAnchor='middle'
          text='Last 7 activities'
          style={style.title}
        />
        <VictoryAxis
          style={style.sgMainAxis}
          standalone={false}
          tickValues={data.map(item => item.x)}
        />
        <VictoryAxis
          orientation='left'
          tickFormat={y => `${y} bpm`}
          domain={[
            Math.min(...data.map(item => item.y)) - 1,
            Math.max(...data.map(item => item.y))
          ]}
          dependentAxis
          standalone={false}
          style={style.sgXAxis}
          //   offsetX={60}
        />
        <VictoryBar
          //   alignment='start'
          barRatio={0.8}
          domain={{
            y: [
              Math.min(...data.map(item => item.y)) - 1,
              Math.max(...data.map(item => item.y))
            ],
            x: [1, 7]
          }}
          data={data}
          style={style.sgBar}
        />
      </VictoryChart>
    </>
  )
}

export default SidebarGraph
