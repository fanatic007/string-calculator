import {add} from '.';

test('empty string returns zero', () => {
  expect(add('')).toBe(0);
});

test('single number returns its value', () => {
  expect(add('1')).toBe(1);
});