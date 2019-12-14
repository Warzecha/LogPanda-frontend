import React from 'react';

import Drawer from "@material-ui/core/Drawer";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import useMainStyle from "../styles/MainStyles";
import {BugReport, History, Settings, Speed, SupervisorAccount, ExitToApp} from "@material-ui/icons";
import {Link} from "react-router-dom";


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
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={name}/>
            </ListItem>
        </li>
    );
}

export default function SideBar(props) {
    const classes = useMainStyle();


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

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar}/>
            <List>
                {
                    menuItems.map((item, index) => <ListItemLink key={index} {...item}/>)
                }
            </List>
            <Divider/>

            <ListItem button key={'Sign Out'}>
                <ListItemIcon><ExitToApp/></ListItemIcon>
                <ListItemText primary={'Sign Out'}/>
            </ListItem>

        </Drawer>
    );
}
