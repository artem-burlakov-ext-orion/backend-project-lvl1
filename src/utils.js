import readlineSync from 'readline-sync';

export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;

export const lowNumber = 1;
export const highNumber = 100;
export const arithFuncArr = [
  { func: add, symbol: '+' },
  { func: sub, symbol: '-' },
  { func: mul, symbol: '*' },
];

export const hiddenNumSymbol = '..';
export const numOfProgression = 2;
export const lengthOfProgression = 10;
export const numberOfTries = 3;

export const getRandomNumber = (low, high) => Math.floor(Math.random() * (high - low + 1) + low);

export const menu = () => {
  console.log('-----------------------------');
  console.log('Welcome to the Brain Games!');
  console.log('If you want to exit - press \'0\'.');
  console.log('[0] --- exit');
  console.log('[1] --- brain-even');
  console.log('[2] --- brain-calc');
  console.log('[3] --- brain-gcd');
  console.log('[4] --- brain-prime');
  console.log('[5] --- brain-progression');
  const userChoice = readlineSync.question('What game do you want to play: ');
  return userChoice;
};
