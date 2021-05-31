const reverseString = require('./reverseString');

test('Elephant will become tanhpelE', () => {
  expect(reverseString('Elephant')).toBe('tnahpelE');
});

test('John Smith will become htimS nhoJ', () => {
  expect(reverseString('John Smith')).toBe('htimS nhoJ');
});