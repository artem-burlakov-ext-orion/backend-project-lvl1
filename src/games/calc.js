import runEngine from '..';
import getRandomNumber from '../utils';

const operators = ['-', '+', '*'];

const gameInfo = 'What is the result of the expression?';

const calculate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '-':
      return firstNumber - secondNumber;
    case '+':
      return firstNumber + secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`${operator} is wrong operator!`);
  }
};

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = String(calculate(operator, firstNumber, secondNumber));
  return {
    question,
    correctAnswer,
  };
};

export default () => runEngine(gameInfo, getGameData);
