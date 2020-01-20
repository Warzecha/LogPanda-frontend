import React, {useEffect, useState} from "react";
import MetricsComponentView from "./MetricsComponentView";
import axios from "axios";

const HOUR = 60 * 60 * 1000;

const MetricsComponentContainer = () => {
    // const [uptime, setUptime] = useState(98.97);
    const [errorRate, setErrorRate] = useState(0);
    const [serverErrors, setServerErrors] = useState(0);
    const [capacity, setCapacity] = useState(1);

    const [currentRpm, setCurrentRpm] = useState(0);


    useEffect(() => {
        const params = {
            endTimestamp: Date.now(),
            startTimestamp: Date.now() - HOUR,
        };
        axios.get(process.env.REACT_APP_METRICS_URL, {params})
            .then(res => {
                const reduced = res.data.reduce((acc, item) => {
                    return ({
                        timestamp: acc.timestamp,
                        totalRequestCount: acc.totalRequestCount + item.totalRequestCount,
                        clientErrorCount: acc.clientErrorCount + item.clientErrorCount,
                        serverErrorCount: acc.serverErrorCount + item.serverErrorCount,
                        successfulRequestsCount: acc.successfulRequestsCount + item.successfulRequestsCount
                    })
                });

                let totalErrorCount = (reduced.clientErrorCount + reduced.serverErrorCount);
                let totalErrorRate = totalErrorCount / reduced.totalRequestCount * 100;
                let serverErrorRate = reduced.serverErrorCount / totalErrorCount * 100;

                setErrorRate(totalErrorRate);
                setServerErrors(serverErrorRate);
                setCurrentRpm(reduced.totalRequestCount / 10)


            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    useEffect(() => {
        axios.get(process.env.REACT_APP_APPS_URL)
            .then(res => {
                const totalCap = res.data.map(item => item.maxRpm)
                    .reduce((acc, current) => acc + current);
                console.log("total cap", totalCap)
                setCapacity(totalCap)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <MetricsComponentView
            // uptime={uptime}
            errorRate={errorRate}
            serverErrors={serverErrors}
            capacity={capacity}
            currentRpm={currentRpm}
        />
    )

};


export default MetricsComponentContainer;
