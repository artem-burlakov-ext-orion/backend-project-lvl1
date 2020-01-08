import runEngine from '..';
import getRandomNumber from '../utils';

const hiddenNumSymbol = '..';
const lengthOfProgression = 10;
const operators = ['-', '+'];

const gameInfo = 'What number is missing in the progression?';

const getQuestion = (firstElem, step, index) => {
  const progression = [firstElem];
  for (let i = 2; i <= lengthOfProgression; i += 1) {
    const newElem = progression[0] + (i - 1) * step;
    progression.push(newElem);
  }
  progression[index] = hiddenNumSymbol;
  return progression.join(' ');
};

const getGameData = () => {
  const randomNumber = getRandomNumber(1, 10);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const step = Number(`${operator}${randomNumber}`);
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
