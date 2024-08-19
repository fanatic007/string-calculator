import {add} from '.';

test('empty string returns zero', () => {
  expect(add('')).toBe(0);
});

test('single number', () => {
  expect(add('1')).toBe(1);
});

test('multiple numbers separated by commas', () => {
  expect(add('1,4,5')).toBe(10);
});