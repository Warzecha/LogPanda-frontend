import React, {useState} from 'react';

import Drawer from "@material-ui/core/Drawer";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import useMainStyle from "../styles/MainStyles";
import {BugReport, History, Settings, Speed, SupervisorAccount, ExitToApp} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useMediaQuery} from "@material-ui/core";


function ListItemLink(props) {
    const {icon, name, to} = props;
    const renderLink = React.useMemo(
        () =>
            React.forwardRef((itemProps, ref) => (
                <Link to={to} {...itemProps} ref={ref}/>
            )),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink} onClick={props.onItemClicked}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={name}/>
            </ListItem>
        </li>
    );
}

export default function SideBar(props) {
    const classes = useMainStyle();
    const isSmallDevice = useMediaQuery('(max-width:600px)');

    const drawerContent = (
        <div>
            <List>
                {
                    menuItems.map((item, index) => {
                        return <ListItemLink {...item}
                                             key={index}
                                             onItemClicked={props.onMobileDrawerClose}
                        />
                    })
                }
            </List>
            <Divider/>

            <ListItem button key={'Sign Out'}>
                <ListItemIcon><ExitToApp/></ListItemIcon>
                <ListItemText primary={'Sign Out'}/>
            </ListItem>
        </div>
    );

    if (isSmallDevice) {
        return (
            <Drawer
                // container={container}
                variant="temporary"
                // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                onClose={props.onMobileDrawerClose}
                open={props.isMobileDrawerOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawerContent}
            </Drawer>
        )
    } else {
        return (
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar}/>
                {drawerContent}
            </Drawer>
        );
    }

}


const menuItems = [
    {
        "name": "Metrics",
        "icon": <Speed/>,
        "to": "/metrics"
    },
    {
        "name": "Logs",
        "icon": <History/>,
        "to": "/logs"
    },
    {
        "name": "Error Reports",
        "icon": <BugReport/>,
        "to": "/errors"
    },
    {
        "name": "Settings",
        "icon": <Settings/>,
        "to": "/settings"
    },
    {
        "name": "Administration",
        "icon": <SupervisorAccount/>,
        "to": "/admin"
    },
];
