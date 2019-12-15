import React from "react";

import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

export default function (props) {

    const classes = useStyles();

    const error = props.percentiles.map(item => item.selected).filter(v => v).length < 1;

    const checkBoxes = props.percentiles.map((item, index) => (<FormControlLabel key={index}
                                                                                 control={<Checkbox
                                                                                     checked={item.selected}
                                                                                     onChange={() => props.onChangePercentile(index)}
                                                                                     value={item.selected}
                                                                                     color="primary"
                                                                                 />}
                                                                                 label={item.label}
    />));


    return (
        <div className={classes.root}>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >

                    <Grid container>
                        <Grid item xs={6}>
                            <Typography className={classes.heading}>Filters</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.secondaryHeading}>Narrow down your results</Typography>
                        </Grid>
                    </Grid>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <div className={classes.columnContainer}>

                                    <DateTimePicker label="Start Date"
                                                    inputVariant="outlined"
                                                    value={props.startDate}
                                                    onChange={props.onStartDateChange}
                                    />

                                    <DateTimePicker label="End Date"
                                                    inputVariant="outlined"
                                                    value={props.endDate}
                                                    onChange={props.onEndDateChange}
                                                    className={classes.spaceAbove}
                                    />
                                </div>
                            </MuiPickersUtilsProvider>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl required error={error} component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Charts to display</FormLabel>
                                <FormGroup>
                                    {checkBoxes}
                                </FormGroup>
                                <FormHelperText>You need to select at least one</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
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
    spaceAbove: {
        marginTop: 30
    },
    columnContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'space-around'
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
    }
}));
