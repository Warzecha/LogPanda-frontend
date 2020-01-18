import React, {useEffect, useState} from 'react';
import ErrorRateChart from "./ErrorRateChart";
import {generateRandomErrorData, generateRandomLatencyData} from "../../../../utils/chartUtils";

const ErrorRateChartContainer = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(generateRandomErrorData())
    }, []);


    return <ErrorRateChart data={data}/>
};

export default ErrorRateChartContainer;