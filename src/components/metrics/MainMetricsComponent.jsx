import React, {useState} from "react";
import useTileStyle from "../../styles/TileStyles";
import MainMetricsChart from "./MainMetricsChart";
import Grid from '@material-ui/core/Grid';
import OutlinedSelectComponent from "./OutlinedSelectComponent";
import MainMetricsFilterPanel from "./MainMetricsFilterPanel";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";

export default function MainMetricsComponent(props) {
    const classes = useTileStyle();

    const [metricName, setMetricName] = useState('');
    const [sourceApp, setSourceApp] = useState('');

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <Card className={classes.card}>
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

                <Grid item xs={12}>
                    <MainMetricsFilterPanel
                        startDate={startDate}
                        endDate={endDate}
                        onStartDateChange={dateTime => setStartDate(dateTime)}
                        onEndDateChange={dateTime => setEndDate(dateTime)}

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
