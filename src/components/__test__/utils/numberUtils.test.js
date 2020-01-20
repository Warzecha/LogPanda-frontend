import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {round} from "../../../utils/numberUtils";


test('return correct data', () => {
    let data = round(1.2345);
    expect(data).toEqual("1.23")
});
