import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';

import ThroughputChart from "../../../metrics/charts/throughput/ThroughputChart";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThroughputChart/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
