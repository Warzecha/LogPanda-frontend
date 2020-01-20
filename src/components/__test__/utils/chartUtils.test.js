import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {tooltipLabelFormatter} from "../../../utils/chartUtils";


test('return correct data', () => {

    let data = tooltipLabelFormatter(0);
    expect(data).toEqual("1970-01-01 01:00")
});
