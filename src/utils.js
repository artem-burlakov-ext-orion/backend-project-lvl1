export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;

export const arithFuncArr = [
  { func: add, symbol: '+' },
  { func: sub, symbol: '-' },
  { func: mul, symbol: '*' },
];

export const getRandomNumber = (low, high) => Math.floor(Math.random() * (high - low + 1) + low);
