
import readlineSync from 'readline-sync';


const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;

const lowNumber = 1;
const highNumber = 100;
const arithFuncArr = [
  { func: add, symbol: '+' },
  { func: sub, symbol: '-' },
  { func: mul, symbol: '*' }
];

const hiddenNum = '..';
const numOfProgression = 2;
const lengthOfProgression = 10;

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
}

export const getRandomNumber = (low, high) => {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

export const getProgression = (length, numOfProgression) => {
  let arithProgression = [getRandomNumber(lowNumber, highNumber)];
  let func = arithFuncArr[getRandomNumber(0, arithFuncArr.length - 1)].func;
  for (let i = 0; i < length - 1; i++) {
    let newElem = func(arithProgression[i], numOfProgression);
    arithProgression.push(newElem);
  }
  return arithProgression;
}

export const getModifiedProgression = (arr) => {
  const index = getRandomNumber(0, arr.length - 1);
  const hiddenElem = arr[index];
  arr[index] = hiddenNum;
  return { arr, hiddenElem };
}

export const numbersGameObj = {
  welcome: 'Answer \'yes\' if the number is even, otherwise answer \'no\'.',
  correctAnswer: null,
  getQuestion: function () {
    const randomNumber = getRandomNumber(lowNumber, highNumber);
    this.correctAnswer = (randomNumber % 2) ? 'yes' : 'no';
    return `${randomNumber}`;
  },
};

export const calcGameObj = {
  welcome: 'What is the result of the expression?',
  correctAnswer: null,
  getQuestion: function () {
    const firstNumber = getRandomNumber(lowNumber, highNumber);
    const secondNumber = getRandomNumber(lowNumber, highNumber);
    const randomArithFuncObj = arithFuncArr[getRandomNumber(0, arithFuncArr.length - 1)];
    this.correctAnswer = randomArithFuncObj.func(firstNumber, secondNumber);
    return `${firstNumber} ${randomArithFuncObj.symbol} ${secondNumber}`
  },
};

export const gcdGameObj = {
  welcome: 'Find the greatest common divisor of given numbers.',
  correctAnswer: null,
  getQuestion: function () {
    const firstNumber = getRandomNumber(lowNumber, highNumber);
    const secondNumber = getRandomNumber(lowNumber, highNumber);
    this.correctAnswer = this.getCorrectAnswer(firstNumber, secondNumber);
    return `${firstNumber} ${secondNumber}`;
  },
  getCorrectAnswer: function (firstNumber, secondNumber) {
    let maxNumber = Math.max(firstNumber, secondNumber);
    let minNumber = Math.min(firstNumber, secondNumber);
    let remOnDiv = maxNumber % minNumber;
    while (remOnDiv !== 0) {
      maxNumber = minNumber;
      minNumber = remOnDiv;
      remOnDiv = maxNumber % minNumber;
      continue;
    }
    return minNumber;
  }
};

export const progressionGameObj = {
  welcome: 'What number is missing in the progression?',
  correctAnswer: null,
  getQuestion: function () {
    const arithProgression = getProgression(lengthOfProgression, numOfProgression);
    const modifiedProgression = getModifiedProgression(arithProgression);
    this.correctAnswer = modifiedProgression.hiddenElem;
    return modifiedProgression.arr.join(' ');
  }
};

export const primeGameObj = {
  welcome: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestion: function () {
    return `${getRandomNumber(lowNumber + 1, highNumber)}`
  },
  getCorrectAnswer: function (str) {
    const strToNum = Number(str);
    for (let i = 2; i < strToNum; i++) {
      if (strToNum % i === 0) {
        return 'no';
      } else {
        continue;
      }
    }
    return 'yes';
  }
};


export const baseGame = (gameObj) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameObj.welcome);
  const userName = getName();
  console.log(`Hello, ${userName}!`);
  let counter = 0;
  while (counter !== 3) {
    const question = gameObj.getQuestion();
    const correctAnswer = gameObj.correctAnswer;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer == correctAnswer) {
      console.log('Correct!');
      counter += 1;
      continue;
    }
    console.log(`\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${correctAnswer}\'.`);
    console.log(`Let\'s try again, ${userName}!`);
    return;
  }
  console.log(`Congratulations, ${userName}!`);
}
