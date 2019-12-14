import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import useMainStyle from "../styles/MainStyles";
import MetricsScreen from "../screens/MetricsScreen";
import LogsScreen from "../screens/LogsScreen";
import ErrorsScreen from "../screens/ErrorsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AdminScreen from "../screens/AdminScreen";

export default function MainNavigation() {
    const classes = useMainStyle();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
                <Switch>
                    <Route path="/metrics">
                        <MetricsScreen/>
                    </Route>
                    <Route path="/logs">
                        <LogsScreen/>
                    </Route>
                    <Route path="/errors">
                        <ErrorsScreen/>
                    </Route>
                    <Route path="/settings">
                        <SettingsScreen/>
                    </Route>
                    <Route path="/admin">
                        <AdminScreen/>
                    </Route>
                </Switch>
        </main>)

}
