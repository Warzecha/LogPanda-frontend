import React from "react";
import useTileStyle from "../../styles/TileStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {round} from "../../utils/numberUtils";


const ThroughputComponent = (props) => {
    const classes = useTileStyle();
    const {capacity, currentRpm} = props;

    const relativeCapacity = currentRpm / capacity * 100;

    const formatThroughput = (value) => {
        if (value < 5000) {
            return value
        } else if (value < 20000) {
            const thousands = value / 1000;
            return round(thousands, 2) + 'k'
        } else if (value < 1000000) {
            const thousands = value / 1000;
            return round(thousands, 1) + 'k'
        } else {
            const millions = value / 1000000;
            return round(millions, 3) + 'M'
        }
    };


    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                    Current throughput
                </Typography>

                <div className={classes.row}>
                    <Typography variant="h5" component="h2">
                        {formatThroughput(currentRpm)}
                    </Typography>
                    <Typography variant="h5" component="h2" className={classes.appendix} color="textSecondary">
                        {"RPM"}
                    </Typography>
                </div>

                <Typography className={classes.sectionTitle} color="textSecondary">
                    Relative
                </Typography>

                <div className={classes.row}>
                    <Typography variant="h5" component="h2">
                        {round(relativeCapacity, 1)}%
                    </Typography>
                    <Typography variant="h5" component="h2" className={classes.appendix} color="textSecondary">
                        {"capacity"}
                    </Typography>
                </div>

            </CardContent>
        </Card>
    )

};

export default ThroughputComponent;

