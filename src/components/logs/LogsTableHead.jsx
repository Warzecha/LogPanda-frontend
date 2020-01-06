import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import React from "react";
import {Info} from "@material-ui/icons";



export default function(props) {
    const {classes, order, orderBy, onRequestSort} = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox"
                           align={'center'}
                >
                    <Info/>
                </TableCell>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={order}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const headCells = [
    {id: 'appName', numeric: false, disablePadding: true, label: 'Application Name'},
    {id: 'requestPath', numeric: false, disablePadding: false, label: 'Requested path'},
    {id: 'method', numeric: false, disablePadding: false, label: 'HTTP Method'},
    {id: 'statusCode', numeric: false, disablePadding: false, label: 'HTTP Status Code'},
    {id: 'requestTimestamp', numeric: true, disablePadding: false, label: 'Timestamp'},
    {id: 'requestDuration', numeric: true, disablePadding: false, label: 'Request duration'},
];
