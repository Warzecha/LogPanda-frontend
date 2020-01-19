import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';

import ThroughputChartContainer from "../../../metrics/charts/throughput/ThroughputChartContainer";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThroughputChartContainer/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
