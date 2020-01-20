import React from "react";
import useTileStyle from "../../styles/TileStyles";
import Grid from '@material-ui/core/Grid';
import OutlinedSelectComponent from "./OutlinedSelectComponent";
import MainMetricsFilterPanel from "./MainMetricsFilterPanel";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import ChartContainer from "./charts/ChartContainer";

const MainMetricsComponent = (props) => {
    const classes = useTileStyle();

    return (
        <Card className={classes.card}>
            <ChartContainer chartToShow={props.metricName}
                            percentiles={props.percentiles}
                            sourceApp={props.sourceApp}
                            sourceAppItems={props.sourceAppItems}

            />

            <Grid container spacing={3}>
                <Grid item xs={6}>

                    <OutlinedSelectComponent label={'Metric name'}
                                             value={props.metricName}
                                             onChange={(event) => props.onMetricChange(event.target.value)}
                                             items={props.metricsMenuItems}
                    />
                </Grid>
                <Grid item xs={6}>
                    <OutlinedSelectComponent label={'Source App'}
                                             value={props.sourceApp}
                                             onChange={(event) => {
                                                 props.onSourceAppChange(event.target.value)
                                             }}
                                             items={props.sourceAppItems}

                    />
                </Grid>

                <Grid item xs={12}>
                    <MainMetricsFilterPanel
                        startDate={props.startDate}
                        endDate={props.endDate}
                        onStartDateChange={dateTime => props.onStartDateChange(dateTime)}
                        onEndDateChange={dateTime => props.onEndDateChange(dateTime)}
                        percentiles={props.percentiles}
                        onChangePercentile={props.onPercentileChange}

                    />
                </Grid>
            </Grid>

            <CardActions>
                <Button size="small">Cancel</Button>
                <Button size="small" color="primary">Apply</Button>
            </CardActions>

        </Card>
    );
};

export default MainMetricsComponent;
