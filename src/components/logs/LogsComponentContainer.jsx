import React, {useEffect, useState} from "react";

import LogsComponentView from "./LogsComponentView";
import axios from "axios";

const MINUTE = 60_000;

const LogsComponentContainer = () => {

    const [logs, setLogs] = useState([]);
    const [error, setError] = useState([]);

    const [startTimestamp, setStartTimestamp] = useState(Date.now() - MINUTE);
    const [endTimestamp, setEndTimestamp] = useState(Date.now());

    const handleApplyFilters = (filters) => {
        setStartTimestamp(filters.startDate.valueOf());
        setEndTimestamp(filters.endDate.valueOf());
    };


    useEffect(() => {
        const params = {
            startTimestamp,
            endTimestamp
        };

        axios.get(process.env.REACT_APP_LOGS_URL, {params})
            .then(res => {
                setLogs(res.data)
            })
            .catch(err => {
                setError(err)
            })
    }, [startTimestamp, endTimestamp]);

    return <LogsComponentView logs={logs} onFiltersApply={handleApplyFilters}/>
};

export default LogsComponentContainer;
