import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import LogsComponentContainer from "../../logs/LogsComponentContainer/LogsComponentContainer";


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogsComponentContainer logs={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
