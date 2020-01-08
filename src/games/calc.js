import runEngine from '..';
import getRandomNumber from '../utils';

const operators = ['-', '+', '*'];

const gameInfo = 'What is the result of the expression?';

const getCalcResult = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '-':
      return String(firstNumber - secondNumber);
    case '+':
      return String(firstNumber + secondNumber);
    case '*':
      return String(firstNumber * secondNumber);
    default:
      throw new Error(`${operator} is wrong operator!`);
  }
};

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = getCalcResult(operator, firstNumber, secondNumber);
  return {
    question,
    correctAnswer,
  };
};

export default () => runEngine(gameInfo, getGameData);
