import React, {useState} from 'react';
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import {BrowserRouter as Router} from "react-router-dom";
import MainNavigation from "./routes/MainNavigation";
import useMainStyle from "./styles/MainStyles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {

    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    const classes = useMainStyle();

    const handleDrawerButton = () => {
        setIsMobileDrawerOpen(!isMobileDrawerOpen);
    };


    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopBar onDrawerToggle={handleDrawerButton}
                    isDrawerOpen={isMobileDrawerOpen}

            />

            <Router basename={process.env.PUBLIC_URL}>
                <SideBar isMobileDrawerOpen={isMobileDrawerOpen}
                         onMobileDrawerClose={() => {setIsMobileDrawerOpen(false)}}
                />

                <MainNavigation/>


            </Router>
        </div>
    );
}

export default App;
