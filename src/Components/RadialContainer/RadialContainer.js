import './RadialContainer.scss';
import * as React from 'react';
import { RadialGauge } from '@progress/kendo-react-gauges';


const RadialContainer = ({ percentage }) => {
  const [radialOptions, setRadialOptions] = React.useState({
    showLabels: true,
    showTicks: true,
    ticksColor: '#008000',
    labelsColor: '#0000ff',
    rangeSize: 10,
    rangeLineCap: 'round',
    rangeColor: '#ffcccc',
    startAngle: 0,
    endAngle: 180,
    reverse: false
  });
  
  
  const onFieldChange = (event, fieldName, parse) => {
    let value = parse ? parseInt(event.target.value, 10) : event.target.value;
    setRadialOptions({
      ...radialOptions,
      [fieldName]: value
    });
  };
  
  const onShowLabelChange = e => {
    onFieldChange(e, 'showLabels', false);
  };
  
  const onShowTicksChange = e => {
    onFieldChange(e, 'showTicks', false);
  };
  
  const onTicksColorChange = e => {
    onFieldChange(e, 'ticksColor', false);
  };
  
  const onLabelsColorChange = e => {
    onFieldChange(e, 'labelsColor', false);
  };
  
  const onRangeSizeChange = e => {
    onFieldChange(e, 'rangeSize', true);
  };
  
  const onRangeColorChange = e => {
    onFieldChange(e, 'rangeColor', false);
  };
  
  const onStartAngleChange = e => {
    onFieldChange(e, 'startAngle', true);
  };
  
  const onEndAngleChange = e => {
    onFieldChange(e, 'endAngle', true);
  };
  
  const onReverseChange = e => {
    onFieldChange(e, 'reverse', false);
  };
  
  const {
    showLabels,
    showTicks,
    ticksColor,
    labelsColor,
    rangeSize,
    rangeColor,
    startAngle,
    endAngle,
    reverse
  } = radialOptions;
  
  
  
  return (
    <div>
      {/* <div className="example-config">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <label>
              <Switch checked={showLabels} onChange={onShowLabelChange} />
              &nbsp;Show Labels
            </label>
          </div>
          <div className="col-sm-12 col-md-3">
            <label>
              <Switch checked={showTicks} onChange={onShowTicksChange} />
                      &nbsp;Show Ticks
          </label>
        </div>

        <div className="col-sm-12 col-md-3">
          <label>
            <input type="color" value={ticksColor} onChange={onTicksColorChange} />
                      &nbsp;Ticks Color
          </label>
        </div>
        <div className="col-sm-12 col-md-3">
          <label>
            <input type="color" value={labelsColor} onChange={onLabelsColorChange} />
                      &nbsp;Labels Color
          </label>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <label>
            <NumericTextBox width={80} onChange={onRangeSizeChange} value={rangeSize} min={1} max={30} />
                      &nbsp;Range Size
          </label>
        </div>
        <div className="col-sm-12 col-md-6">
          <label>
            <input type="color" value={rangeColor} onChange={onRangeColorChange} />
                      &nbsp;Range Color
          </label>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <label>
            <input type="range" min="-90" max="90" value={startAngle} style={{
              verticalAlign: 'middle'
            }} onChange={onStartAngleChange} />
                      &nbsp;Start angle
          </label>
        </div>
        <div className="col-sm-12 col-md-6">
          <label>
            <input type="range" min="90" max="270" value={endAngle} style={{
              verticalAlign: 'middle'
            }} onChange={onEndAngleChange} />
                      &nbsp;End angle
          </label>
        </div>
      </div>
      <hr />
      <label>
        <Switch checked={reverse} onChange={onReverseChange} />
              &nbsp;Reverse
      </label>
    </div> */}
    <RadialGauge  pointer={{
      value: percentage,
      color: "blue",
      cap: {
        size: 0.05,
      },
      length: 1,
    }} transitions={true} scale={{
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
      ranges: [{
        from: 0,
        to: 33,
        color: "red",
      },
      {
        from: 34,
        to: 66,
        color: "orange"
      },
      {
        from: 67,
        to: 100,
        color: "#28FF0D"
      }
    ]
    }} />
  </div>
  )
}

export default RadialContainer