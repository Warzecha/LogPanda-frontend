import React from "react";
import Paper from "@material-ui/core/Paper";
import useTileStyle from "../../styles/TileStyles";

export default function MainMetricsComponent(props) {

    const classes = useTileStyle();

    return (
        <Paper className={classes.card}>xs=12</Paper>
    )
}
