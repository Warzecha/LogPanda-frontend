import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMainStyle from "../styles/MainStyles";

export default function TopBar(props) {
    const classes = useMainStyle();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Logs Panda
                </Typography>
            </Toolbar>
        </AppBar>
    );
}



