import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';

import ThroughputComponent from "../../metrics/ThroughputComponent";
import {act} from "@testing-library/react";

test('renders without crashing', () => {
    const div = document.createElement('div');

    act(() => {
        ReactDOM.render(<ThroughputComponent/>, div);
    });

    ReactDOM.unmountComponentAtNode(div)
});
