import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import MainMetricsComponentContainer from "../../metrics/MainMetricsComponentContainer";

import {act} from "@testing-library/react";
import mockAxios from "axios";

mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
        data: []
    })
);

test('renders without crashing', () => {
    const div = document.createElement('div');
    act(() => {
        ReactDOM.render(<MainMetricsComponentContainer/>, div);
    });
    ReactDOM.unmountComponentAtNode(div)
});
