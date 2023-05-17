import './RadialContainer.scss';
import * as React from 'react';
import { RadialGauge } from '@progress/kendo-react-gauges';

const RadialContainer = ({ percentage }) => {
  const {
    showLabels,
    showTicks,
    ticksColor,
    labelsColor,
    rangeSize,
    startAngle,
    endAngle,
    reverse
  } = {
    showLabels: true,
    showTicks: true,
    ticksColor: '#008000',
    labelsColor: '#0000ff',
    rangeSize: 10,
    startAngle: 0,
    endAngle: 180,
    reverse: false
  };

  return (
    <div>
      <RadialGauge
        pointer={{
          value: percentage / 10,
          color: "blue",
          cap: {
            size: 0.05,
          },
          length: 1,
        }}
        transitions={true}
        scale={{
          labels: {
            format: 'b',
            color: labelsColor,
            visible: showLabels
          },
          majorTicks: {
            visible: showTicks,
            color: ticksColor
          },
          minorTicks: {
            visible: showTicks,
            color: ticksColor
          },
          rangeSize,
          startAngle,
          endAngle,
          reverse,
          ranges: [
            {
              from: 0,
              to: 33.3,
              color: "red",
            },
            {
              from: 33.4,
              to: 66.7,
              color: "orange"
            },
            {
              from: 66.8,
              to: 100,
              color: "#28FF0D"
            }
          ]
        }}
      />
    </div>
  );
};

export default RadialContainer;
