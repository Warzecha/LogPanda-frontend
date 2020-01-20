import React from 'react';
import ReactDOM from 'react-dom'
import {Map} from 'immutable'
import '@testing-library/jest-dom/extend-expect';

import MainMetricsComponent from "../../metrics/MainMetricsComponent";
import {act} from "@testing-library/react";

test('renders without crashing', () => {
    const div = document.createElement('div');
    act(() => {
        ReactDOM.render(<MainMetricsComponent metricsMenuItems={[]} percentiles={new Map()} sourceAppItems={[]} />, div);
    });
    ReactDOM.unmountComponentAtNode(div)
});
