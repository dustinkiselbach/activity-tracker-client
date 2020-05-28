import React from 'react'
import { VictoryAxis, VictoryLine } from 'victory'
import { graphStyle } from '../style/graphStyle'

const AreaGraph = ({ splits, hidden }) => {
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
    }
    // avgElev: {
    //   avgElev,
    //   domainY: [0, 5],
    //   tickFormat: 'meters',
    //   axisStyle: 'axisThree',
    //   lineStyle: 'lineThree'
    // }
  }

  console.log(hidden.map(item => data[item.id]))

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
          {/* dataset one
          {hidden.id !== 'hr' && (
            <>
              <VictoryAxis
                domain={[50, 200]}
                dependentAxis
                offsetX={50}
                orientation='left'
                standalone={false}
                tickFormat={x => `${x} bpm`}
                style={styles.axisOne}
              />
              <VictoryLine
                data={avgHr}
                domain={{
                  x: [tickValues[0], tickValues.slice(-1)[0]],
                  y: [50, 200]
                }}
                interpolation='monotoneX'
                standalone={false}
                style={styles.lineOne}
              />
            </>
          )} */}
          {/* /> */}
          {hidden.map((item, index) => (
            <GraphPartial
              domainY={data[item.id].domainY}
              tickFormat={data[item.id].tickFormat}
              //   axisStyle={style.item.axisStyle}
              //   lineStyle={style.item.lineStyle}
              tickValues={tickValues}
              dataSet={data[item.id].dataSet}
              orientation={index === 0 ? 'left' : 'right'}
            />
          ))}

          {/* <GraphPartial
            domainY={[50, 200]}
            tickFormat='bpm'
            axisStyle={styles.axisOne}
            lineStyle={styles.lineOne}
            tickValues={tickValues}
            dataSet={avgHr}
          />
          <GraphPartial
            domainY={[0, 5]}
            tickFormat='m/s'
            axisStyle={styles.axisTwo}
            lineStyle={styles.lineTwo}
            tickValues={tickValues}
            dataSet={avgSpeed}
          /> */}
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
        key={tickFormat}
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
        key={tickFormat + 'x'}
      />
    </>
  )
}

export default AreaGraph
