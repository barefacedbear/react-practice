import './ChartBar.css';

export const ChartBar = props => {
    let barFillHeight = '0%';
    if (props.maxValue > 0) {
        barFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
        console.log(barFillHeight);
    }
    return <div className="ChartBar">
        <div className="ChartBar-inner">
            <div className="ChartBar-fill" style={{ height: barFillHeight }}></div>
        </div>
        <div className="ChartBar-label">{props.label}</div>
    </div>
};
