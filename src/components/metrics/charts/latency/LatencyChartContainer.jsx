import React, {useEffect, useState} from 'react';
import LatencyChart from "./LatencyChart";
import {generateRandomLatencyData} from "../../../../utils/chartUtils";

const LatencyChartContainer = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(generateRandomLatencyData())
    }, []);
    return <LatencyChart data={data} percentiles={props.percentiles}/>;
};

export default LatencyChartContainer;