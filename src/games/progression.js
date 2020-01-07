import gameEngine from '..';
import getRandomNumber from '../utils';

const hiddenNumSymbol = '..';
const lengthOfProgression = 10;
const operators = ['-', '+'];

const gameInfo = 'What number is missing in the progression?';

const getProgressionData = (length) => {
  const randomNumber = getRandomNumber(1, 10);
  const index = getRandomNumber(0, operators.length - 1);
  const operator = operators[index];
  const stepOfProgression = Number(operator + randomNumber);
  const progression = [getRandomNumber(1, 100)];
  const hiddenElemIndex = getRandomNumber(0, length - 1);
  const hiddenElem = progression[0] + hiddenElemIndex * stepOfProgression;
  for (let i = 1; i < length; i += 1) {
    const newElem = progression[i - 1] + stepOfProgression;
    progression.push(newElem);
  }
  progression[hiddenElemIndex] = hiddenNumSymbol;
  return {
    progression,
    hiddenElem,
  };
};

const getGameData = () => {
  const progressionData = getProgressionData(lengthOfProgression);
  const question = progressionData.progression.join(' ');
  const correctAnswer = `${progressionData.hiddenElem}`;
  return {
    question,
    correctAnswer,
  };
};

export default function () {
  return gameEngine(gameInfo, getGameData);
}
