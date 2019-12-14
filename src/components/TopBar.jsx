import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMainStyle from "../styles/MainStyles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import {useMediaQuery} from "@material-ui/core";

export default function TopBar(props) {
    const classes = useMainStyle();
    const isSmallDevice = useMediaQuery('(max-width:600px)');

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                {isSmallDevice && <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.onDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>}
                <Typography variant="h6" noWrap>
                    Logs Panda
                </Typography>
            </Toolbar>
        </AppBar>
    );
}



