import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import LogsComponentContainer from "../../logs/LogsComponentContainer";
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
        ReactDOM.render(<LogsComponentContainer logs={[]}/>, div)
    });
    ReactDOM.unmountComponentAtNode(div)
});
