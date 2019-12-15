import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core";

export default function (props) {
    const styles = useStyles();

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const menuItems = props.items.map((item, index) => (
        <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
    ));

    return (
        <FormControl variant="outlined" className={styles.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                {props.label}
            </InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={props.value}
                onChange={props.onChange}
                labelWidth={labelWidth}
            >
                {menuItems}
            </Select>
        </FormControl>
    )
}

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
