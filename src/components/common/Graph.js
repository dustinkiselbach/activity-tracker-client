import React from 'react'
import { VictoryAxis, VictoryLine } from 'victory'
import { graphStyle } from '../style/graphStyle'

const Graph = ({ splits, shown }) => {
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

  const data = {
    tickValues,
    avgHr: {
      dataSet: avgHr,
      domainY: [50, 200],
      tickFormat: 'bpm',
      axisStyle: 'axisOne',
      lineStyle: 'lineOne'
    },
    avgSpeed: {
      dataSet: avgSpeed,
      domainY: [0, 5],
      tickFormat: 'm/s',
      axisStyle: 'axisTwo',
      lineStyle: 'lineTwo'
    },
    avgElev: {
      dataSet: avgElev,
      domainY: [-50, 50],
      tickFormat: 'meters',
      axisStyle: 'axisThree',
      lineStyle: 'lineThree'
    }
  }

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
