import React, {useEffect, useState} from 'react';
import LatencyChart from "./LatencyChart";
import {generateRandomLatencyData} from "../../../../utils/chartUtils";

const LatencyChartContainer = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(generateRandomLatencyData())
    }, []);
    return <LatencyChart data={data}/>;
};

export default LatencyChartContainer;