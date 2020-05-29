export const graphStyle = () => {
  const colorPrimary = '#d9534f'
  const colorSecondary = '#5cb85c'
  const colorTertiary = '#f0ad4e'
  const colorDark = '#414141'
  const colorLight = '#fff'

  return {
    parent: {
      background: colorLight,
      boxSizing: 'border-box',
      display: 'inline',
      padding: 0,
      fontFamily: "'Jost', sans-serif",
      transform: 'translateX(50%)',
      width: '50%',
      height: '100%'
    },
    // INDEPENDENT AXIS
    axisSplits: {
      axis: { stroke: colorDark, strokeWidth: 1 },
      ticks: {
        stroke: colorDark,
        strokeWidth: 1,
        size: 1
      },
      tickLabels: {
        fill: colorDark,
        fontFamily: 'inherit',
        fontSize: 10
      }
    },
    // DATA SET ONE
    axisOne: {
      grid: {
        stroke: colorDark,
        strokeWidth: 0
      },
      axis: { stroke: colorDark, strokeWidth: 1 },
      ticks: { strokeWidth: 1 },
      tickLabels: {
        fill: colorPrimary,
        fontFamily: 'inherit',
        fontSize: 10
      }
    },
    lineOne: {
      data: { stroke: colorPrimary, strokeWidth: 1 }
    },
    // DATA SET TWO
    axisTwo: {
      axis: { stroke: colorDark, strokeWidth: 1 },
      tickLabels: {
        fill: colorSecondary,
        fontFamily: 'inherit',
        fontSize: 10
      }
    },
    lineTwo: {
      data: { stroke: colorSecondary, strokeWidth: 1 }
    },
    // DATA SET THREE
    axisThree: {
      axis: { stroke: colorDark, strokeWidth: 1 },
      tickLabels: {
        fill: colorTertiary,
        fontFamily: 'inherit',
        fontSize: 10
      }
    },
    lineThree: {
      data: { stroke: colorTertiary, strokeWidth: 1 }
    }
  }
}
