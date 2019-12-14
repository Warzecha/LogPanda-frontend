import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import useTileStyle from "../../styles/TileStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {round} from "../../utils/numberUtils";



export default function ThroughputComponent() {

    const classes = useTileStyle();

    const currentValue = 175945;
    const relativeCapacity = 47.7;

    return(
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                    Current throughput
                </Typography>

                <div className={classes.row}>
                    <Typography variant="h5" component="h2">
                        {formatThroughput(currentValue)}
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
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )

}


const formatThroughput = (value) => {
    if (value < 5000) {
        return value
    } else if(value < 20000) {
        const thousands = value / 1000;
        return round(thousands, 2) + 'k'
    } else if(value < 1000000) {
        const thousands = value / 1000;
        return round(thousands, 1) + 'k'
    } else {
        const millions = value / 1000000;
        return round(millions, 3) + 'M'
    }
}
