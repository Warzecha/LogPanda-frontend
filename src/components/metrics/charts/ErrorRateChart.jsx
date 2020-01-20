import React from 'react';
import {ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import moment from "moment";
import {makeStyles} from "@material-ui/core/styles";
import BarChart from "recharts/lib/chart/BarChart";
import Legend from "recharts/lib/component/Legend";
import Bar from "recharts/lib/cartesian/Bar";
import {round} from "../../../utils/numberUtils";
import {tooltipLabelFormatter} from "../../../utils/chartUtils";

const ErrorRateChart = (props) => {

    const useStyle = makeStyles(() => ({
        container: {
            marginTop: 20,
        },
    }));

    const classes = useStyle();

    const tooltipFormatter = (value, name) => {

        let label;
        if (name === "clientErrorRate") {
            label = "Client Errors"
        } else if (name === "serverErrorRate") {
            label = "Server Errors"
        } else {
            label = "Successful Requests"
        }

        return [round(value, 1) + '%', label]
    };

    const toPercentageValues = (data) => data.map(item => {
        const {
            timestamp,
            totalRequestCount,
            clientErrorCount,
            serverErrorCount,
        } = item;

        const clientErrorRate = (clientErrorCount / totalRequestCount) * 100;
        const serverErrorRate = (serverErrorCount / totalRequestCount) * 100;
        const successfulRequestRate = (100 - clientErrorRate - serverErrorRate);

        return {
            timestamp,
            clientErrorRate,
            serverErrorRate,
            successfulRequestRate
        }
    });

    return (
        <ResponsiveContainer width={'90%'} height={500} className={classes.container}>
            <BarChart data={toPercentageValues(props.data)}
                      // barCategoryGap={1} barSize={10}
            >
                <XAxis dataKey='timestamp'
                       domain={['auto', 'dataMax']}
                       name='Time'
                       tickFormatter={(unixTime) => moment(unixTime).format('YYYY-MM-DD HH:mm')}
                       type='number'/>
                <YAxis domain={[0, 100.0]} name={'Error rate'} unit={'%'} />

                <Tooltip
                    formatter={tooltipFormatter}
                    labelFormatter={tooltipLabelFormatter}
                />
                <Legend/>
                <Bar dataKey="successfulRequestRate" stackId="a" fill="#82ca9d"/>
                <Bar dataKey="clientErrorRate" stackId="a" fill="#8884d8"/>
                <Bar dataKey="serverErrorRate" stackId="a" fill='#dd7777'/>
            </BarChart>
        </ResponsiveContainer>)
};



export default ErrorRateChart;