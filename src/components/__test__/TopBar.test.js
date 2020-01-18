import React from 'react';
import ReactDOM from 'react-dom'
import TopBar from "../TopBar/TopBar.jsx";
import '@testing-library/jest-dom/extend-expect';


import {render} from '@testing-library/react'

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopBar/>, div);
    ReactDOM.unmountComponentAtNode(div)
});


test('renders top bar title correctly', () => {
    const {getByTestId} = render(<TopBar/>);
    const titleElement = getByTestId("top-bar");
    expect(titleElement).toHaveTextContent('Logs Panda');

});
