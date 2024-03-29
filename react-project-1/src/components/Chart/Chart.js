import { ChartBar } from './ChartBar/ChartBar';
import './Chart.css';

export const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);
    return <div className="Chart">
        {
            props.dataPoints.map(dataPoint =>
                <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} />
            )
        }
    </div>
};
