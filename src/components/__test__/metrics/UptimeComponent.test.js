import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';

import UptimeComponent from "../../metrics/UptimeComponent";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UptimeComponent/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
