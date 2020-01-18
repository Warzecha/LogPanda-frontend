import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import LogsTableHead from "../../logs/LogsTableHead";


test('renders without crashing', () => {
    const div = document.createElement('table');
    ReactDOM.render(<LogsTableHead/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
