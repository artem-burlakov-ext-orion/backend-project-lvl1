import baseGame from '..';
import { getRandomNumber } from '../utils';

const gameInfo = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswer = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getGameData = () => {
  const randomNumber = getRandomNumber(2, 100);
  const question = `${randomNumber}`;
  const correctAnswer = getCorrectAnswer(randomNumber);
  return {
    question,
    correctAnswer,
  };
};

const startPrime = () => baseGame(gameInfo, getGameData);

export default startPrime;
