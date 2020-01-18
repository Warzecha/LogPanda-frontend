import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import LogsFilterDialog from "../../logs/LogsFilterDialog";


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogsFilterDialog/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
