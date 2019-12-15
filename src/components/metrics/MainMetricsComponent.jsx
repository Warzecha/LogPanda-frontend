import React, {useState} from "react";
import Paper from "@material-ui/core/Paper";
import useTileStyle from "../../styles/TileStyles";
import MainMetricsChart from "./MainMetricsChart";
import Grid from '@material-ui/core/Grid';
import OutlinedSelectComponent from "./OutlinedSelectComponent";

export default function MainMetricsComponent(props) {
    const classes = useTileStyle();

    const [metricName, setMetricName] = useState('');
    const [sourceApp, setSourceApp] = useState('');

    return (
        <Paper className={classes.card}>
            <MainMetricsChart/>

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
            </Grid>

        </Paper>
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
