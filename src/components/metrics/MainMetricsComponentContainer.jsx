import React, {useEffect, useState} from "react";
import {Map} from 'immutable'
import MainMetricsComponent from "./MainMetricsComponent";
import axios from "axios";

const MainMetricsComponentContainer = (props) => {
    const [metricName, setMetricName] = useState('errors');
    const [sourceApp, setSourceApp] = useState(null);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [sourceAppItems, setSourceAppItems] = useState([]);

    const [percentiles, setPercentiles] = useState(new Map(initialPercentiles));

    useEffect(() => {

        axios.get(process.env.REACT_APP_APPS_URL)
            .then(res => {
                setSourceAppItems(res.data.map(item => ({name: item.name, value: item.name, maxRpm: item.maxRpm})))
            })
            .catch(err => {
                console.error(err)
            })

    }, []);

    const handleChangePercentile = value => {
        let modified = percentiles.get(value);
        modified.selected = !modified.selected;
        setPercentiles(percentiles.set(value, {...modified}))
    };

    return <MainMetricsComponent sourceAppItems={sourceAppItems}
                                 metricsMenuItems={metricsMenuItems}
                                 percentiles={percentiles}
                                 startDate={startDate}
                                 onStartDateChange={setStartDate}
                                 endDate={endDate}
                                 onEndDateChange={setEndDate}
                                 onPercentileChange={handleChangePercentile}
                                 sourceApp={sourceApp}
                                 onSourceAppChange={setSourceApp}
                                 metricName={metricName}
                                 onMetricChange={setMetricName}


    />
};

const metricsMenuItems = [
    // {
    //     name: "Uptime",
    //     value: 'uptime'
    // },
    {
        name: "Throughput",
        value: 'throughput'
    },
    {
        name: "Latency",
        value: 'latency'
    },
    {
        name: "Error rate",
        value: 'errors'
    },
];


const initialPercentiles = {
    "50": {
        label: 'Average',
        value: '50',
        selected: true
    },
    "90": {
        label: '90%',
        value: '90',
        selected: true
    },
    "95": {
        label: '95%',
        value: '95',
        selected: true
    },
    "99": {
        label: '99%',
        value: '99',
        selected: false
    }
};

export default MainMetricsComponentContainer;
