// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('phone number test 1', () => {
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});

test('phone number test 2', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('phone number test 3', () => {
  expect(isPhoneNumber('123 456 7890')).toBe(false);
});

test('phone number test 3', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('email test 1', () => {
  expect(isEmail('new@ucsd.edu')).toBe(true);
});

test('email test 2', () => {
  expect(isEmail('new@gmail.com')).toBe(true);
});

test('email test 3', () => {
  expect(isEmail('new@ucsd')).toBe(false);
});

test('email test 4', () => {
  expect(isEmail('new@123.com')).toBe(false);
});

test('password test 1', () => {
  expect(isStrongPassword('A123456')).toBe(true);
});

test('password test 2', () => {
  expect(isStrongPassword('A33bdec_djw')).toBe(true);
});

test('password test 3', () => {
  expect(isStrongPassword('c1')).toBe(false);
});

test('password test 4', () => {
  expect(isStrongPassword('12abc34')).toBe(false);
});

test('data test 1', () => {
  expect(isDate('07/05/2024')).toBe(true);
});

test('data test 2', () => {
  expect(isDate('01/01/1970')).toBe(true);
});

test('data test 3', () => {
  expect(isDate('07-05-2024')).toBe(false);
});

test('data test 4', () => {
  expect(isDate('07/05/202')).toBe(false);
});

test('hex color test 1', () => {
  expect(isHexColor('#1f3d4c')).toBe(true);
});

test('hex color test 2', () => {
  expect(isHexColor('#00a')).toBe(true);
});

test('hex color test 3', () => {
  expect(isHexColor('#00a5')).toBe(false);
});

test('hex color test 4', () => {
  expect(isHexColor('#svab3c')).toBe(false);
});

