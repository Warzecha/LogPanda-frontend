import React from 'react';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import moment from "moment";
import {makeStyles} from "@material-ui/core/styles";
import BarChart from "recharts/lib/chart/BarChart";
import Legend from "recharts/lib/component/Legend";
import Bar from "recharts/lib/cartesian/Bar";

const ErrorRateChart = (props) => {

    const classes = useStyle();

    console.log(props.data)

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
            <BarChart data={toPercentageValues(props.data)}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey='timestamp'
                       domain={['dataMin', 'dataMax']}
                       name='Time'
                       tickFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
                       type='number'/>
                <YAxis domain={[0, 100]} name={'Error rate'} unit={'%'}/>

                <Tooltip/>
                <Legend/>
                <Bar dataKey="successfulRequestRate" stackId="a" fill="#82ca9d"/>
                <Bar dataKey="clientErrorRate" stackId="a" fill="#8884d8"/>
                <Bar dataKey="serverErrorRate" stackId="a" fill='#dd7777'/>
            </BarChart>
        </ResponsiveContainer>)
}

const useStyle = makeStyles(() => ({
    container: {
        marginTop: 20,
    },
}));

export default ErrorRateChart;