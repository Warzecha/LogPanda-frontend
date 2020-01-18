import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';

import MetricsComponentView from "../../metrics/MetricsComponentView";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MetricsComponentView/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
