import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import LogsComponentView from "../../logs/LogsComponentView";


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogsComponentView logs={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
