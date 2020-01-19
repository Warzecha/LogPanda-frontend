import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import {Map} from 'immutable'

import LatencyChartContainer from "../../../metrics/charts/latency/LatencyChartContainer";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LatencyChartContainer percentiles={new Map()}/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
