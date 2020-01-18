import React from "react";
import LatencyChartContainer from "./latency/LatencyChartContainer";
import ThroughputChartContainer from "./throughput/ThroughputChartContainer";
import ErrorRateChartContainer from "./errorRate/ErrorRateChartContainer";


export default function MainMetricsChartContainer(props) {

    switch (props.chartToShow) {
        case 'uptime':
            return <div/>;
        case "throughput":
            return <ThroughputChartContainer/>;
        case "latency":
            return <LatencyChartContainer percentiles={props.percentiles}/>;
        case "errors":
            return <ErrorRateChartContainer/>;

        default:
            return <div/>;
    }
}




