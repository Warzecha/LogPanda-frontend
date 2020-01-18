import React, {useEffect, useState} from "react";
import useTileStyle from "../../styles/TileStyles";
import MainMetricsChartContainer from "./charts/MainMetricsChartContainer";
import Grid from '@material-ui/core/Grid';
import OutlinedSelectComponent from "./OutlinedSelectComponent";
import MainMetricsFilterPanel from "./MainMetricsFilterPanel";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import {Map} from 'immutable'

export default function MainMetricsComponent(props) {
    const classes = useTileStyle();

    const [metricName, setMetricName] = useState('errors');
    const [sourceApp, setSourceApp] = useState('');

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [percentiles, setPercentiles] = useState(new Map(initialPercentiles));

    const handleChangePercentile = value => {
        let modified = percentiles.get(value);
        modified.selected = !modified.selected;
        setPercentiles(percentiles.set(value, {...modified} ))
    };

    return (
        <Card className={classes.card}>
            <MainMetricsChartContainer chartToShow={metricName} percentiles={percentiles}/>

            <Grid container spacing={3}>
                <Grid item xs={6}>

                    <OutlinedSelectComponent label={'Metric name'}
                                             value={metricName}
                                             onChange={(event) => setMetricName(event.target.value)}
                                             items={metricsMenuItems}

                    />
                </Grid>
                <Grid item xs={6}>
                    <OutlinedSelectComponent label={'Source App'}
                                             value={sourceApp}
                                             onChange={(event) => setSourceApp(event.target.value)}
                                             items={sourceAppItems}

                    />
                </Grid>

                <Grid item xs={12}>
                    <MainMetricsFilterPanel
                        startDate={startDate}
                        endDate={endDate}
                        onStartDateChange={dateTime => setStartDate(dateTime)}
                        onEndDateChange={dateTime => setEndDate(dateTime)}
                        percentiles={percentiles}
                        onChangePercentile={handleChangePercentile}

                    />
                </Grid>
            </Grid>

            <CardActions>
                <Button size="small">Cancel</Button>
                <Button size="small" color="primary">Apply</Button>
            </CardActions>


        </Card>
    )
}

const sourceAppItems = [
    {
        name: "User Management App",
        value: 'user-management-app'
    },
    {
        name: "Authorization Service",
        value: 'auth-service'
    },
    {
        name: "Video Streaming Service",
        value: 'video-streaming-service'
    },
];

const metricsMenuItems = [
    {
        name: "Uptime",
        value: 'uptime'
    },
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

