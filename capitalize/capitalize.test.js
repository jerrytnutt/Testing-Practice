const capitalize = require('./capitalize');

test('jonathan will become Jonathan', () => {
  expect(capitalize('jonathan')).toBe('Jonathan');
});

test('JOHN will stay as JOHN', () => {
  expect(capitalize('JOHN')).toBe('JOHN');
});