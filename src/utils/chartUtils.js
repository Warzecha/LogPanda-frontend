import moment from "moment";
import {randomInRange} from "./numberUtils";


export function generateRandomThroughputData() {
    const time = moment().startOf('date');
    const data = [];
    for (let i = 0; i < 23; i++) {
        time.add(1, 'h');
        let value = randomInRange(20, 80);

        data.push({
            timestamp: time.valueOf(),
            value: value
        })
    }

    return data;
}


export function generateRandomLatencyData() {
    const time = moment().startOf('date');
    const data = [];
    for (let i = 0; i < 23; i++) {
        time.add(1, 'h');
        let value = randomInRange(40, 1000);


        data.push({
            timestamp: time.valueOf(),
            50: value * 0.5,
            90: value * 0.9,
            95: value * 0.95,
            99: value * 0.99,
        })
    }

    return data;
}

export function generateRandomErrorData() {
    const time = moment().startOf('date');
    const data = [];
    for (let i = 0; i < 23; i++) {
        time.add(1, 'h');
        let totalRequestCount = Math.floor(randomInRange(1000, 2000));

        let clientErrorCount = totalRequestCount * randomInRange(0, 0.2);
        let serverErrorCount = totalRequestCount * randomInRange(0, 0.2);
        let successfulRequestsCount = totalRequestCount - serverErrorCount - clientErrorCount;


        data.push({
            timestamp: time.valueOf(),
            totalRequestCount,
            clientErrorCount,
            serverErrorCount,
            successfulRequestsCount
        })
    }

    return data;
}