import moment from "moment";
import {randomInRange} from "./numberUtils";


export function generateRandomData() {
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
