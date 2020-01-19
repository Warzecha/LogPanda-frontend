import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import LogsTableToolbar from "../../logs/LogsTableToolbar";


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogsTableToolbar/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
