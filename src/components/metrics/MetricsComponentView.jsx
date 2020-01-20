import React from "react";
import UptimeComponent from "./UptimeComponent";
import ThroughputComponent from "./ThroughputComponent";
import useTileStyle from "../../styles/TileStyles";
import Grid from "@material-ui/core/Grid";
import {useMediaQuery, useTheme} from "@material-ui/core";
import MainMetricsComponentContainer from "./MainMetricsComponentContainer";

const MetricsComponentView = (props) => {
    const classes = useTileStyle();
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    const largeScreenLayout = (
        <Grid container spacing={3}>

            <Grid item xs={12} md={8}>
                <MainMetricsComponentContainer/>
            </Grid>
            <Grid item xs={12} md={4}>
                <UptimeComponent {...props}/>
                <ThroughputComponent capacity={props.capacity}
                                     currentRpm={props.currentRpm}/>
            </Grid>
        </Grid>
    );

    const smallScreenLayout = (
        <Grid container spacing={3}>

            <Grid item xs={12} md={6}>
                <UptimeComponent {...props}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <ThroughputComponent capacity={props.capacity}
                                     currentRpm={props.currentRpm}/>
            </Grid>
            <Grid item xs={12}>
                <MainMetricsComponentContainer/>
            </Grid>

        </Grid>
    );

    return (
        <div className={classes.root}>
            {isLargeScreen ? largeScreenLayout : smallScreenLayout}
        </div>
    )

};

export default MetricsComponentView;



