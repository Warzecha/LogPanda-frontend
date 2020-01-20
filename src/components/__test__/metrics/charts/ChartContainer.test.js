import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import ChartContainer from "../../../metrics/charts/ChartContainer";
import {act} from "@testing-library/react";
import {Map} from 'immutable'

import mockAxios from "axios";

mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
        data: []
    })
);

test('renders without crashing', () => {
    const div = document.createElement('div');
    act(() => {
        ReactDOM.render(<ChartContainer/>, div);
    });

    ReactDOM.unmountComponentAtNode(div)
});

test('renders errors container crashing', () => {
    const div = document.createElement('div');
    act(() => {
        ReactDOM.render(<ChartContainer chartToShow={"errors"}/>, div);
    });

    ReactDOM.unmountComponentAtNode(div)
});

test('renders throughput container crashing', () => {
    const div = document.createElement('div');
    act(() => {
        ReactDOM.render(<ChartContainer chartToShow={"throughput"} percentiles={new Map()}/>, div);
    });

    ReactDOM.unmountComponentAtNode(div)
});

test('renders uptime container crashing', () => {
    const div = document.createElement('div');
    act(() => {
        ReactDOM.render(<ChartContainer chartToShow={"uptime"}/>, div);
    });

    ReactDOM.unmountComponentAtNode(div)
});

test('renders latency container crashing', () => {
    const div = document.createElement('div');
    act(() => {
        ReactDOM.render(<ChartContainer chartToShow={"latency"}/>, div);
    });

    ReactDOM.unmountComponentAtNode(div)
});
