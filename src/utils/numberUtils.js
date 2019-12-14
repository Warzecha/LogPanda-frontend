

export function round(value, decimalPlaces= 2) {
    return parseFloat(value).toFixed(decimalPlaces);
}


export function randomInRange(min, max) {
    return Math.random() * (+max - +min) + +min;
}
