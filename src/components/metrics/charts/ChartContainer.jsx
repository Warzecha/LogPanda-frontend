import React, {useEffect, useState} from "react";
import ErrorRateChart from "./ErrorRateChart";
import LatencyChart from "./LatencyChart";
import ThroughputChart from "./ThroughputChart";
import axios from "axios";


const INTERVAL = 10*60_000;

const ChartContainer = (props) => {

    const [rawData, setRawData] = useState([]);
    const [error, setError] = useState(null);

    const reduceDataSize = (data) => {
        let dataPointsPerBar = Math.floor(data.length / 20);
        let bars = [];

        for (let i = 0; i < data.length; i += dataPointsPerBar) {
            let singleBar = data.slice(i, i+dataPointsPerBar).reduce((acc, item) => {
                return ({
                    timestamp: acc.timestamp,
                    totalRequestCount: acc.totalRequestCount + item.totalRequestCount,
                    clientErrorCount: acc.clientErrorCount + item.clientErrorCount,
                    serverErrorCount: acc.serverErrorCount + item.serverErrorCount,
                    successfulRequestsCount: acc.successfulRequestsCount + item.successfulRequestsCount,
                })
            });

            bars.push(singleBar)
        }
        return bars;
    };

    useEffect(() => {
        const params = {
            endTimestamp: Date.now(),
            startTimestamp: Date.now() - INTERVAL,
            appName: props.sourceApp || null
        };
        axios.get(process.env.REACT_APP_METRICS_URL, {params})
            .then(res => {

                setRawData(res.data)
            })
            .catch(err => {
                setError(err)
                console.log(err)
            })
    }, [props.sourceApp, props.chartToShow]);


    const extractThroughputData = (data) => data.map(metric => {
        let app = props.sourceAppItems.filter(item => item.name === props.sourceApp)[0];

        let maxRpm = (app ? app.maxRpm : 1000);
        maxRpm = (maxRpm === -1 ? 1 : maxRpm);

        return ({
            timestamp: metric.timestamp,
            value: metric.totalRequestCount / maxRpm * 1000
        })
    });


    switch (props.chartToShow) {
        case 'uptime':
            return <div/>;
        case "throughput":
            return <ThroughputChart data={extractThroughputData(rawData)}/>;
        case "latency":
            return <LatencyChart percentiles={props.percentiles} data={rawData}/>;
        case "errors":
            return <ErrorRateChart data={reduceDataSize(rawData)}/>;

        default:
            return <div/>;
    }
};

export default ChartContainer;




