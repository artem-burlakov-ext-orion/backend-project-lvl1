import gameEngine from '..';
import getRandomNumber from '../utils';

const gameInfo = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const getGameData = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default function () {
  return gameEngine(gameInfo, getGameData);
}
