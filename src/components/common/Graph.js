import React from 'react'
import { VictoryAxis, VictoryLine } from 'victory'
import { graphStyle } from '../style/graphStyle'

const Graph = ({ splits, shown, paceUnit }) => {
  // organizing data
  const tickValues = splits.map(split => split.split)

  const avgHr = splits.map(split => ({
    x: split.split,
    y: split.average_heartrate
  }))

  const avgSpeed = splits.map(split => ({
    x: split.split,
    y: split.average_speed
  }))

  const avgElev = splits.map(split => ({
    x: split.split,
    y: split.elevation_difference
  }))

  console.log(paceUnit)

  const data = {
    tickValues,
    avgHr: {
      dataSet: avgHr,
      domainY: [
        Math.floor(Math.min(...avgHr.map(item => item.y))),
        Math.ceil(Math.max(...avgHr.map(item => item.y)))
      ],
      tickFormat: 'bpm',
      axisStyle: 'axisOne',
      lineStyle: 'lineOne'
    },
    avgSpeed: {
      dataSet: avgSpeed,
      domainY:
        // to see if which direction lines need to be
        paceUnit === 'min/m' || paceUnit === 'min/km'
          ? [
              Math.ceil(Math.max(...avgSpeed.map(item => item.y))),
              Math.floor(Math.min(...avgSpeed.map(item => item.y)))
            ]
          : [
              Math.floor(Math.min(...avgSpeed.map(item => item.y))),
              Math.ceil(Math.max(...avgSpeed.map(item => item.y)))
            ],
      tickFormat: paceUnit,
      axisStyle: 'axisTwo',
      lineStyle: 'lineTwo'
    },
    avgElev: {
      dataSet: avgElev,
      domainY: [
        Math.floor(Math.min(...avgElev.map(item => item.y))),
        Math.ceil(Math.max(...avgElev.map(item => item.y)))
      ],
      tickFormat: 'meters',
      axisStyle: 'axisThree',
      lineStyle: 'lineThree'
    }
  }

  console.log(data)

  const styles = graphStyle()

  return (
    <div className='graph'>
      <svg viewBox='0 0 450 350' style={styles.parent}>
        <g transform={'translate(0, 40)'}>
          <VictoryAxis
            standalone={false}
            tickValues={tickValues}
            tickFormat={x => `${x} mi`}
            style={styles.axisSplits}
          />

          {shown.map((item, index) => (
            <GraphPartial
              domainY={data[item.id].domainY}
              tickFormat={data[item.id].tickFormat}
              axisStyle={styles[data[item.id].axisStyle]}
              lineStyle={styles[data[item.id].lineStyle]}
              tickValues={tickValues}
              dataSet={data[item.id].dataSet}
              orientation={index === 0 ? 'left' : 'right'}
              key={data[item.id].tickFormat}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}

const GraphPartial = ({
  domainY,
  tickFormat,
  tickValues,
  axisStyle,
  lineStyle,
  orientation,
  dataSet
}) => {
  if (orientation === 'left') {
    axisStyle.grid = {
      stroke: '#414141',
      strokeWidth: 0.5
    }
  }

  return (
    <>
      <VictoryAxis
        domain={domainY}
        dependentAxis
        offsetX={50}
        orientation={orientation}
        standalone={false}
        tickFormat={x => `${x} ${tickFormat}`}
        style={axisStyle}
      />
      <VictoryLine
        data={dataSet}
        domain={{
          x: [tickValues[0], tickValues.slice(-1)[0]],
          y: domainY
        }}
        interpolation='monotoneX'
        standalone={false}
        style={lineStyle}
        animate={{}}
      />
    </>
  )
}

export default Graph
