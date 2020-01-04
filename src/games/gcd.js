import gameEngine from '..';
import getRandomNumber from '../utils';

const gameInfo = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  let maxNumber = Math.max(firstNumber, secondNumber);
  let minNumber = Math.min(firstNumber, secondNumber);
  let reminderOfDiv = maxNumber % minNumber;
  while (reminderOfDiv !== 0) {
    maxNumber = minNumber;
    minNumber = reminderOfDiv;
    reminderOfDiv = maxNumber % minNumber;
  }
  const correctAnswer = `${minNumber}`;
  return {
    question,
    correctAnswer,
  };
};

const startGameGcd = () => gameEngine(gameInfo, getGameData);

export default startGameGcd;
