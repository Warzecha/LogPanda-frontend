import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';

import ErrorRateChart from "../../../metrics/charts/ErrorRateChart";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorRateChart data={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div)
});

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorRateChart data={[{timestamp: 123}]}/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
