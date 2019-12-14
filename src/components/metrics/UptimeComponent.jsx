import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {round} from "../../utils/numberUtils";
import useTileStyle from "../../styles/TileStyles";



export default function UptimeComponent(props) {
    const classes = useTileStyle();

    const {uptime, errorRate, serverErrors} = props;
    const roundUptime = round(uptime, 2);
    const roundErrorRate = round(errorRate, 2);
    const roundServerErrors = round(serverErrors, 2);

    const last24h = calculateTimePeriodInLast24hr(uptime);

    return(
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                    Uptime
                </Typography>
                <Typography variant="h5" component="h2">
                    {roundUptime}%
                </Typography>


                <Typography color="textSecondary">
                    {last24h} during last 24h
                </Typography>


                <Typography className={classes.sectionTitle} color="textSecondary">
                    Error rate
                </Typography>
                <Typography variant="h5" component="h2">
                    {roundErrorRate}%
                </Typography>



                <Typography className={classes.sectionTitle} color="textSecondary">
                    of which
                </Typography>
                <Typography variant="h5" component="h2">
                    {roundServerErrors}%
                </Typography>
                <Typography color="textSecondary">
                    were server side errors
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

const calculateTimePeriodInLast24hr = (uptime) => {
    let totalSeconds = 24 * 60 * 60 * (100 - uptime) / 100;

    let hours   = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    let seconds = round(totalSeconds - (hours * 3600) - (minutes * 60), 0);

    hours = formatTime(hours, 'h');
    minutes = formatTime(minutes, 'min');
    seconds = formatTime(seconds, 's');

    return hours + ' ' + minutes + ' ' + seconds;
};

const formatTime = (value, appendix) => ((value || '') && (value + appendix));

