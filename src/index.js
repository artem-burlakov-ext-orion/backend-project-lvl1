
import readlineSync from 'readline-sync';

const lowNumber = 1;
const highNumber = 100;
const operators = ['+', '-', '*'];

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
}

export const getRandomNumber = (low, high) => {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

export const getRandomOperator = () => {
  return operators[getRandomNumber(0, operators.length - 1)];
}


export const numbersGameObj = {
  welcome: 'Answer \'yes\' if the number is even, otherwise answer \'no\'.',
  getQuestion: function () {
    return `${getRandomNumber(lowNumber, highNumber)}`
  },
  getCorrectAnswer: function (str) {
    return (str % 2 === 0) ? 'yes' : 'no';
  }
};

export const calcGameObj = {
  welcome: 'What is the result of the expression?',
  getQuestion: function () {
    return `${getRandomNumber(lowNumber, highNumber)} ${getRandomOperator()} ${getRandomNumber(lowNumber, highNumber)}`
  },
  getCorrectAnswer: function (str) {
    return eval(str);
  }
};

export const gcdGameObj = {
  welcome: 'Find the greatest common divisor of given numbers.',
  getQuestion: function () {
    return `${getRandomNumber(lowNumber, highNumber)} ${getRandomNumber(lowNumber, highNumber)}`
  },
  getCorrectAnswer: function (str) {
    const strToNumArr = str.split(' ').map(Number);
    let firstNumber = Math.max(...strToNumArr);
    let secondNumber = Math.min(...strToNumArr);
    let remOnDiv = firstNumber % secondNumber;
    while (remOnDiv !== 0) {
      firstNumber = secondNumber;
      secondNumber = remOnDiv;
      remOnDiv = firstNumber % secondNumber;
      continue;
    }
    return secondNumber;
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
    const correctAnswer = gameObj.getCorrectAnswer(question);
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
