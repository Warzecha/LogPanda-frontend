import React, {useState} from "react";

import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import moment from "moment";
import LogsTableToolbar from "./LogsTableToolbar";
import LogsTableHead from "./LogsTableHead";
import LogsFilterDialog from "./LogsFilterDialog";
import {Error, CheckCircle} from "@material-ui/icons";
import {green} from '@material-ui/core/colors';


export default function (props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('timestamp');
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);


    const handleRequestSort = (event, property) => {
        const isDesc = orderBy === property && order === 'desc';
        setOrder(isDesc ? 'asc' : 'desc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = event => {
        setDense(event.target.checked);
    };

    const desc = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    };

    const stableSort = (array, cmp) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = cmp(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map(el => el[0]);
    };

    const getSorting = (order, orderBy) => {
        return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.logs.length - page * rowsPerPage);

    const handleApplyFilters = (filters) => {
        console.log("Applying filters", filters);
        setIsFilterDialogOpen(false);
        props.onFiltersApply(filters);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <LogsTableToolbar openFilterDialog={() => setIsFilterDialogOpen(true)}/>
                <LogsFilterDialog open={isFilterDialogOpen}
                                  onApply={handleApplyFilters}
                                  onClose={() => setIsFilterDialogOpen(false)}
                />
                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                    aria-label="enhanced table"
                >
                    <LogsTableHead
                        classes={classes}
                        order={order}
                        orderBy={orderBy}
                        // onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={props.logs.length}
                    />
                    <TableBody>
                        {stableSort(props.logs, getSorting(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={index}
                                    >
                                        <TableCell padding="checkbox" align={"center"}>
                                            {row.statusCode >= 400 ? <Error color={"error"}/> :
                                                <CheckCircle style={{color: green[500]}}/>}
                                        </TableCell>
                                        <TableCell component="th" id={labelId} scope="row" padding="none">
                                            {row.appName}
                                        </TableCell>
                                        <TableCell align="left">{row.path}</TableCell>
                                        <TableCell align="left">{row.method}</TableCell>
                                        <TableCell align="left">{row.statusCode}</TableCell>
                                        <TableCell
                                            align="left">{moment(row.timestamp).format("D.MM.YYYY, HH:mm:ss")}</TableCell>
                                        <TableCell align="left">{row.elapsedTime}</TableCell>
                                    </TableRow>
                                );
                            })}
                        {emptyRows > 0 && (
                            <TableRow style={{height: (dense ? 33 : 53) * emptyRows}}>
                                <TableCell colSpan={6}/>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={props.logs.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense}/>}
                label="Dense padding"
            />
        </div>
    );

}


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));





