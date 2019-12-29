
import readlineSync from 'readline-sync';


const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;

const lowNumber = 1;
const highNumber = 100;
const arithFuncArr = [
  { func: add, symbol: '+' },
  { func: sub, symbol: '-' },
  { func: mul, symbol: '*' },
];

const hiddenNumSymbol = '..';
const numOfProgression = 2;
const lengthOfProgression = 10;

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const getRandomNumber = (low, high) => Math.floor(Math.random() * (high - low + 1) + low);

export const getProgression = (length) => {
  const arithProgression = [getRandomNumber(lowNumber, highNumber)];
  const { func } = arithFuncArr[getRandomNumber(0, arithFuncArr.length - 1)];
  for (let i = 0; i < length - 1; i += 1) {
    const newElem = func(arithProgression[i], numOfProgression);
    arithProgression.push(newElem);
  }
  return arithProgression;
};

export const getModifiedProgression = (arr) => {
  const copyArr = arr;
  const index = getRandomNumber(0, copyArr.length - 1);
  const hiddenNum = copyArr[index];
  copyArr[index] = hiddenNumSymbol;
  return { copyArr, hiddenNum };
};

export const numbersGameObj = {
  welcome: 'Answer \'yes\' if the number is even, otherwise answer \'no\'.',
  correctAnswer: null,
  getQuestion() {
    const randomNumber = getRandomNumber(lowNumber, highNumber);
    this.correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    return `${randomNumber}`;
  },
};

export const calcGameObj = {
  welcome: 'What is the result of the expression?',
  correctAnswer: null,
  getQuestion() {
    const firstNumber = getRandomNumber(lowNumber, highNumber);
    const secondNumber = getRandomNumber(lowNumber, highNumber);
    const randomArithFuncObj = arithFuncArr[getRandomNumber(0, arithFuncArr.length - 1)];
    this.correctAnswer = `${randomArithFuncObj.func(firstNumber, secondNumber)}`;
    return `${firstNumber} ${randomArithFuncObj.symbol} ${secondNumber}`;
  },
};

export const gcdGameObj = {
  welcome: 'Find the greatest common divisor of given numbers.',
  correctAnswer: null,
  getQuestion() {
    const firstNumber = getRandomNumber(lowNumber, highNumber);
    const secondNumber = getRandomNumber(lowNumber, highNumber);
    this.correctAnswer = `${this.getCorrectAnswer(firstNumber, secondNumber)}`;
    return `${firstNumber} ${secondNumber}`;
  },
  getCorrectAnswer(firstNumber, secondNumber) {
    let maxNumber = Math.max(firstNumber, secondNumber);
    let minNumber = Math.min(firstNumber, secondNumber);
    let remOnDiv = maxNumber % minNumber;
    while (remOnDiv !== 0) {
      maxNumber = minNumber;
      minNumber = remOnDiv;
      remOnDiv = maxNumber % minNumber;
    }
    return minNumber;
  },
};

export const progressionGameObj = {
  welcome: 'What number is missing in the progression?',
  correctAnswer: null,
  getQuestion() {
    const arithProgression = getProgression(lengthOfProgression);
    const modifiedProgression = getModifiedProgression(arithProgression);
    this.correctAnswer = `${modifiedProgression.hiddenNum}`;
    return modifiedProgression.copyArr.join(' ');
  },
};

export const primeGameObj = {
  welcome: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestion() {
    return `${getRandomNumber(lowNumber + 1, highNumber)}`;
  },
  getCorrectAnswer(str) {
    const strToNum = Number(str);
    for (let i = 2; i < strToNum; i += 1) {
      if (strToNum % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  },
};

export const baseGame = (gameObj) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameObj.welcome);
  const userName = getName();
  console.log(`Hello, ${userName}!`);
  let counter = 0;
  while (counter !== 3) {
    const question = gameObj.getQuestion();
    const { correctAnswer } = gameObj;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    counter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
