import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('should get squared numbers', () => {
  const result = getMinSquaredNumber([-4, 2, 7]);
  expect(result).toEqual(4);
});
