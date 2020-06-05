import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory'
import { graphStyle } from '../style/graphStyle'

const SidebarGraph = ({ week1 }) => {
  const days = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa']

  const data = days.map((day, index) => ({
    y: week1.filter(item => item.weekDay === index)[0]
      ? week1.filter(item => item.weekDay === index)[0].data.distance
      : null,
    x: day
  }))

  const style = graphStyle()
  return (
    <>
      <VictoryChart domainPadding={10}>
        <VictoryLabel
          x={225}
          y={25}
          textAnchor='middle'
          text='This weeks activities'
          style={style.title}
        />
        <VictoryAxis
          style={style.sgMainAxis}
          standalone={false}
          // tickValues={days.map(item => item)}
        />
        {/* <VictoryAxis
          orientation='left'
          // tickFormat={y => `${y} bpm`}
          // domain={[
          //   Math.min(...data.map(item => item.y)) - 1,
          //   Math.max(...data.map(item => item.y))
          // ]}
          dependentAxis
          standalone={false}
          style={style.sgXAxis}
          //   offsetX={60}
        /> */}
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
