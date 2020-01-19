import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import {Map} from 'immutable'

import ErrorRateChartContainer from "../../../metrics/charts/errorRate/ErrorRateChartContainer";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorRateChartContainer percentiles={new Map()}/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
