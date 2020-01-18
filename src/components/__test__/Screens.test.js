import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';


import AdminScreen from "../../screens/AdminScreen";
import ErrorsScreen from "../../screens/ErrorsScreen";
import LogsScreen from "../../screens/LogsScreen";
import MetricsScreen from "../../screens/MetricsScreen";
import SettingsScreen from "../../screens/SettingsScreen";

test('Admin Screen renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AdminScreen/>, div);
    ReactDOM.unmountComponentAtNode(div)
});


test('Errors Screen renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorsScreen/>, div);
    ReactDOM.unmountComponentAtNode(div)
});


test('Logs Screen renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogsScreen/>, div);
    ReactDOM.unmountComponentAtNode(div)
});


test('Metrics Screen renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MetricsScreen/>, div);
    ReactDOM.unmountComponentAtNode(div)
});


test('Settings Screen renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SettingsScreen/>, div);
    ReactDOM.unmountComponentAtNode(div)
});