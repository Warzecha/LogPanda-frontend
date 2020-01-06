import React, {useState} from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {makeStyles} from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";

export default function (props) {
    const classes = useStyles();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const buildFiltersObject = () => (
        {startDate, endDate}
    );

    return (
        <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Filter Lofs</DialogTitle>
            <DialogContent>

                <MuiPickersUtilsProvider utils={MomentUtils}>

                    <div className={classes.columnContainer}>
                        <DateTimePicker label="Start Date"
                                        inputVariant="outlined"
                                        value={startDate}
                                        onChange={newDate => {setStartDate(newDate)}}
                        />

                        <DateTimePicker label="End Date"
                                        inputVariant="outlined"
                                        value={endDate}
                                        onChange={(newDate) => {setEndDate(newDate)}}
                                        className={classes.spaceAbove}
                        />
                    </div>
                </MuiPickersUtilsProvider>


            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => props.onApply(buildFiltersObject())} color="primary">
                    Apply
                </Button>
            </DialogActions>
        </Dialog>
    )

}

const useStyles = makeStyles(theme => ({
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'space-around'
    },
}));
