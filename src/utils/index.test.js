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

test('numbers separated by newlines or commas', () => {
  expect(add('1\n4,5')).toBe(10);
});

test('custom delimiter', () => {
  expect(add('//;\n1\n4;5')).toBe(10);
});

test('throws error for negative and invalid numbers', () => {
  expect(()=> add('//;\n-1\n4;5')).toThrow(new Error('Negative numbers not allowed -1'));
  expect(()=> add('//;\na\n4;5')).toThrow(new Error('Invalid number a'));
});