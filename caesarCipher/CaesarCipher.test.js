const caesarCipher = require('./CaesarCipher');

test('Caesar Cipher Test 1', () => {
  expect(caesarCipher("defend the east wall of the castle!",1)).toEqual("efgfoe uif fbtu xbmm pg uif dbtumf!");
});

test('Caesar Cipher Test 2', () => {
  expect(caesarCipher("XxcV Rtyy6!",5)).toEqual("CchA Wydd6!");
});

test('Caesar Cipher Test 3', () => {
  expect(caesarCipher("SeCoDe",160)).toEqual("WiGsHi");
});