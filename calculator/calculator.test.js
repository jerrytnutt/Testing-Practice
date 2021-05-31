const calculator = require('./calculator');

test('10 + 10', () => {
  expect(calculator.add(10,10)).toEqual(20);
});

test('100 - 10', () => {
    expect(calculator.subtract(100,10)).toEqual(90);
});

test('5 x 5', () => {
    expect(calculator.multiply(5,5)).toEqual(25);
});

test('15 / 5', () => {
    expect(calculator.divide(15,5)).toEqual(3);
});