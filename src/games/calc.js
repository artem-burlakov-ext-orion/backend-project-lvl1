import gameEngine from '..';
import getRandomNumber from '../utils';

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;

const operators = ['-', '+', '*'];

const gameInfo = 'What is the result of the expression?';

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const index = getRandomNumber(0, operators.length - 1);
  const operator = operators[index];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  let correctAnswer;
  if (operator === '-') {
    correctAnswer = `${sub(firstNumber, secondNumber)}`;
  }
  if (operator === '+') {
    correctAnswer = `${add(firstNumber, secondNumber)}`;
  }
  if (operator === '*') {
    correctAnswer = `${mul(firstNumber, secondNumber)}`;
  }
  return {
    question,
    correctAnswer,
  };
};

const startGameCalc = () => gameEngine(gameInfo, getGameData);

export default startGameCalc;
