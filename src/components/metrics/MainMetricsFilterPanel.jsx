import React from "react";

import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

export default function (props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.heading}>Filters</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>Narrow down your results</Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <DateTimePicker label="Start Date"
                                            inputVariant="outlined"
                                            value={props.startDate}
                                            onChange={props.onStartDateChange}
                            />

                            <DateTimePicker label="End Date"
                                            inputVariant="outlined"
                                            value={props.endDate}
                                            onChange={props.onEndDateChange}
                                            className={classes.bottomDateTimePicker}
                            />

                        </MuiPickersUtilsProvider>
                    </div>
                    <div className={classes.column}>
                        {/*<Typography variant="caption">*/}
                        {/*    Select your destination of choice*/}
                        {/*    <br />*/}
                        {/*    <a href="#secondary-heading-and-columns" className={classes.link}>*/}
                        {/*        Learn more*/}
                        {/*    </a>*/}
                        {/*</Typography>*/}
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );

}


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    bottomDateTimePicker: {
        marginTop: 30
    }
}));
