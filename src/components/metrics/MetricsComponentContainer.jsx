import React, {useState} from "react";
import MetricsComponentView from "./MetricsComponentView";


export default function MetricsComponentContainer() {

    const [uptime, setUptime] = useState(98.97);
    const [errorRate, setErrorRate] = useState(0.12);
    const [serverErrors, setServerErrors] = useState(30.2);
    const [throughputMetrics, setThroughputMetrics] = useState(defaultThroughputMetrics);


    return (
        <MetricsComponentView uptime={uptime}
                              errorRate={errorRate}
                              serverErrors={serverErrors}
                              throughputMetrics={throughputMetrics}

        />
    )

}

const defaultThroughputMetrics = {
    currentValue: 175945,
    relativeCapacity: 47.7
};
