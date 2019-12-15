import React from "react";
import UptimeComponent from "./UptimeComponent";
import ThroughputComponent from "./ThroughputComponent";
import MainMetricsComponent from "./MainMetricsComponent";
import useTileStyle from "../../styles/TileStyles";
import Grid from "@material-ui/core/Grid";

export default function MetricsComponentView(props) {

    const classes = useTileStyle();

    return(
        <div className={classes.root}>

            <Grid container spacing={3}>

                <Grid item xs={8}>
                    <MainMetricsComponent/>
                </Grid>
                <Grid item xs={4}>
                    <UptimeComponent {...props}/>
                    <ThroughputComponent {...props.throughputMetrics}/>
                </Grid>

            </Grid>

        </div>
    )


}


