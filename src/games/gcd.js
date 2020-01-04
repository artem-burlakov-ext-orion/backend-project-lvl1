import baseGame from '..';
import { getRandomNumber } from '../utils';

const gameInfo = 'Find the greatest common divisor of given numbers.';
const getGameData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  let maxNumber = Math.max(firstNumber, secondNumber);
  let minNumber = Math.min(firstNumber, secondNumber);
  let remOnDiv = maxNumber % minNumber;
  while (remOnDiv !== 0) {
    maxNumber = minNumber;
    minNumber = remOnDiv;
    remOnDiv = maxNumber % minNumber;
  }
  const correctAnswer = `${minNumber}`;
  return {
    question,
    correctAnswer,
  };
};

const startGcd = () => baseGame(gameInfo, getGameData);

export default startGcd;
