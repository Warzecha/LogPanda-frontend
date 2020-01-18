import React, {useEffect} from "react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import moment from "moment";
import {makeStyles} from "@material-ui/core/styles";
import {round} from "../../../../utils/numberUtils";

const LatencyChart = (props) => {

    const classes = useStyle();

    const tooltipFormatter = (value, name) => {
        if (name === 50) {
            return [round(value, 1) + 'ms', "Average"]
        } else {
            return [round(value, 1) + 'ms', `${name}th percentile`]
        }
    };

    const tooltipLabelFormatter = (timestamp) => moment(timestamp).format('HH:mm');

    return (
        <ResponsiveContainer width={'90%'} height={500} className={classes.container}>
            <LineChart
                data={props.data}
                margin={{top: 5, right: 0, left: 0, bottom: 5}}
            >

                <XAxis dataKey='timestamp'
                       domain={['dataMin', 'dataMax']}
                       name='Time'
                       tickFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
                       type='number'/>
                <YAxis domain={[0, 'auto']} name={'Latency'} unit={'ms'}/>
                <Tooltip
                    formatter={tooltipFormatter}
                    labelFormatter={tooltipLabelFormatter}
                />
                <CartesianGrid stroke="#f5f5f5"/>
                <Line type="monotone" dataKey={50} stroke="#3f51b5" dot={false} strokeWidth={3}/>
                <Line type="monotone" dataKey={90} stroke="#82ca9d" dot={false} strokeWidth={2}/>
                <Line type="monotone" dataKey={95} stroke="#82ca9d" dot={false} strokeWidth={1}/>
                <Line type="monotone" dataKey={99} stroke="#82ca9d" dot={false} strokeWidth={1}/>
            </LineChart>
        </ResponsiveContainer>)
}

const useStyle = makeStyles(() => ({
    container: {
        marginTop: 20,
    },
}));

export default LatencyChart;




