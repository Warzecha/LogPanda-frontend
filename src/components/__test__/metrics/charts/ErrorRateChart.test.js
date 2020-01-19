import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';

import ErrorRateChart from "../../../metrics/charts/errorRate/ErrorRateChart";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorRateChart data={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
