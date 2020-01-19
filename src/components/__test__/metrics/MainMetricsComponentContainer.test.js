import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';

import MainMetricsChartContainer from "../../metrics/charts/MainMetricsChartContainer";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainMetricsChartContainer/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
