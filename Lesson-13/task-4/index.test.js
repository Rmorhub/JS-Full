import { calc } from './calculator.js';

it('should get sum of numbers', () => {
  const result = calc('1 + 2');
  expect(result).toEqual('1 + 2 = 3');
});

it('should get difference of numbers', () => {
  const result = calc('3 - 4');
  expect(result).toEqual('3 - 4 = -1');
});

it('should get multiply numbers', () => {
  const result = calc('8 * 2');
  expect(result).toEqual('8 * 2 = 16');
});

it('should get divide of number', () => {
  const result = calc('8 / 4');
  expect(result).toEqual('8 / 4 = 2');
});

it('should get null because input is not a string', () => {
  const result = calc(84);
  expect(result).toEqual(null);
});
