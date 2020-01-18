import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';

import MainMetricsComponent from "../../metrics/MainMetricsComponent";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainMetricsComponent/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
