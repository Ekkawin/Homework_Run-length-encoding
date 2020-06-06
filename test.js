const test = require('./encode');

it('Should get s1c1h1o2l1', () => {
  const result = test('school');

  expect(result).toEqual('s1c1h1o2l1');
});
it('Should get S3k1i2l3s1c1h1o3t1u1d1', () => {
  const result = test('Skills School Studio');

  expect(result).toEqual('S3k1i2l3s1c1h1o3t1u1d1');
});
it('Should get A1B1C1a1b1c1', () => {
  const result = test('ABCabc');

  expect(result).toEqual('A1B1C1a1b1c1');
});
it('Should get Please Input Something', () => {
  const result = test('');

  expect(result).toEqual('Please Input Something');
});
