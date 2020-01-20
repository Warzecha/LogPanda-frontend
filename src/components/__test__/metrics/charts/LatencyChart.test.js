import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import {Map} from 'immutable'

import LatencyChart from "../../../metrics/charts/LatencyChart";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LatencyChart percentiles={new Map()}/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
