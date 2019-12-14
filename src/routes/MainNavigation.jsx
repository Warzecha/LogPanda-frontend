import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import useMainStyle from "../styles/MainStyles";
import MetricsScreen from "../screens/MetricsScreen";
import LogsScreen from "../screens/LogsScreen";

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
                </Switch>
        </main>)

}
