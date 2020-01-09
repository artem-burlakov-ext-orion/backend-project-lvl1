import runEngine from '..';
import getRandomNumber from '../utils';

const hiddenNumSymbol = '..';
const lengthOfProgression = 10;
const signs = ['-', '+'];

const gameInfo = 'What number is missing in the progression?';

const getQuestion = (firstElem, step, index) => {
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    const newElem = firstElem + i * step;
    progression.push(newElem);
  }
  progression[index] = hiddenNumSymbol;
  return progression.join(' ');
};

const getGameData = () => {
  const randomNumber = getRandomNumber(1, 10);
  const sign = signs[getRandomNumber(0, signs.length - 1)];
  const step = Number(`${sign}${randomNumber}`);
  const firstElem = getRandomNumber(1, 100);
  const hiddenElemIndex = getRandomNumber(0, lengthOfProgression - 1);
  const hiddenElem = firstElem + hiddenElemIndex * step;
  const question = getQuestion(firstElem, step, hiddenElemIndex);
  const correctAnswer = String(hiddenElem);
  return {
    question,
    correctAnswer,
  };
};

export default () => runEngine(gameInfo, getGameData);
