import React from "react";

import LogsComponentView from "../LogsComponentView";
import {randomInRange} from "../../../utils/numberUtils";

const LogsComponentContainer = () => {
    const data = generateRandomLogs(10);
    return <LogsComponentView logs={data}/>
};

const apps = [
    'User Management App',
    'Authorization Service',
    'Video Streaming Service'
];

const methods = [
    'GET',
    'POST',
    'UPDATE'
];

const statusCodes = [200, 201, 302, 400, 401, 403, 404, 500];

const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)]
};

const paths = [
    '/',
    '/resources',
    '/resource/25',
    '/auth',
];

const generateRandomLogs = (count) => {
    let randomLogs = [];
    for (let i = 0; i < count; i++) {
        randomLogs.push({
            appName: getRandomItem(apps),
            requestPath: getRandomItem(paths),
            method: getRandomItem(methods),
            statusCode: getRandomItem(statusCodes),
            requestTimestamp: Math.round(randomInRange(1576435463000, 1576438463000)),
            requestDuration: Math.round(randomInRange(20, 600))
        })
    }

    return randomLogs;
};

export default LogsComponentContainer;
