import React from 'react';
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import {BrowserRouter as Router} from "react-router-dom";
import MainNavigation from "./routes/MainNavigation";
import useMainStyle from "./styles/MainStyles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const classes = useMainStyle();

    const handleDrawerButton = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopBar onDrawerButton={handleDrawerButton}
                    isDrawerOpen={isDrawerOpen}

            />

            <Router basename={process.env.PUBLIC_URL}>
                <SideBar isDrawerOpen={isDrawerOpen}
                         onDrawerCloseButton={handleDrawerClose}
                />

                <MainNavigation/>


            </Router>
        </div>
    );
}

export default App;
