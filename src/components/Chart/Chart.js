import ChartBar from './ChartBar'
import React from 'react'
import './Chart.css'

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(datapoint => datapoint.value)
    // console.log(dataPointValues);
    const maxPrice = Math.max(...dataPointValues)
    // console.log(maxPrice);
    return (
        <div className="chart">
            {props.dataPoints.map(datapoint => (
                <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={maxPrice}
                    label ={datapoint.label}/>
            ))}
        </div>
    )
}

export default Chart;