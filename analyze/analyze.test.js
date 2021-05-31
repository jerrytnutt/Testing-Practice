const analyze = require('./analyze');

test('Analyze test 1', () => {
  expect(analyze([1,8,3,4,2,6])).toEqual({ avrage: 4, min: 1, max: 8, length: 6 });
});

test('Analyze Test 2', () => {
  expect(analyze([2,5])).toEqual({ avrage: 3.5, min: 2, max: 5, length: 2 });
});