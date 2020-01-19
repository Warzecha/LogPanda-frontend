import React, {useEffect, useState} from 'react';
import {generateRandomThroughputData} from "../../../../utils/chartUtils";
import ThroughputChart from "./ThroughputChart";

const ThroughputChartContainer = (props) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        setData(generateRandomThroughputData())
    }, []);

    return <ThroughputChart data={data} style={props.style}/>
};

export default ThroughputChartContainer;