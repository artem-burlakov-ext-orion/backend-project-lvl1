import gameEngine from '..';
import getRandomNumber from '../utils';

const operators = ['-', '+', '*'];

const gameInfo = 'What is the result of the expression?';

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const index = getRandomNumber(0, operators.length - 1);
  const operator = operators[index];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  let correctAnswer;
  switch (operator) {
    case '-':
      correctAnswer = `${firstNumber - secondNumber}`;
      break;
    case '+':
      correctAnswer = `${firstNumber + secondNumber}`;
      break;
    default:
      correctAnswer = `${firstNumber * secondNumber}`;
      break;
  }
  return {
    question,
    correctAnswer,
  };
};

export default function () {
  return gameEngine(gameInfo, getGameData);
}
