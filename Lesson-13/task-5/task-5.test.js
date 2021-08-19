import {getAdults, reverseArray, withdraw } from './task-5.js';
// test reverseArray
it('should get reversed array', () => {
  const result = reverseArray([1, 5, 6, 9, 10, 12, 15]);
  expect(result).toEqual([15, 12, 10, 9, 6, 5, 1]);
});

it('should get null because input is empty', () => {
  const result = reverseArray();
  expect(result).toEqual(null);
});

it('should get null because input is not aray', () => {
  const result = reverseArray('Test');
  expect(result).toEqual(null);
});

// test withdraw

it('should get result of transaction after payment', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('should get result of -1 because balance less then enough for transaction', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});

it('should get NaN because we didnt enter amount for transaction', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', );
  expect(result).toEqual(NaN);
});

// test getAdults

it('should get result object. Of people whose age is equal or over 18', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get result object . of people whose age is equal or over 18', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it('should get empty object because input is none', () => {
  const result = getAdults();
  expect(result).toEqual({});
});
