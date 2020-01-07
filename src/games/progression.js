import gameEngine from '..';
import getRandomNumber from '../utils';

const hiddenNumSymbol = '..';
const lengthOfProgression = 10;

const getArithProgression = (length) => {
  let stepOfArithProgression = getRandomNumber(-10, 10);
  while (stepOfArithProgression === 0) {
    stepOfArithProgression = getRandomNumber(-10, 10);
  }
  const arithProgression = [getRandomNumber(1, 100)];
  for (let i = 1; i < length; i += 1) {
    const newElem = arithProgression[i - 1] + stepOfArithProgression;
    arithProgression.push(newElem);
  }
  return arithProgression;
};

const getModifiedArithProgressionData = (arr) => {
  const copyOfArr = arr;
  const index = getRandomNumber(0, copyOfArr.length - 1);
  const hiddenNum = copyOfArr[index];
  copyOfArr[index] = hiddenNumSymbol;
  return { copyOfArr, hiddenNum };
};

const gameInfo = 'What number is missing in the progression?';

const getGameData = () => {
  const arithProgression = getArithProgression(lengthOfProgression);
  const modifiedProgressionData = getModifiedArithProgressionData(arithProgression);
  const question = modifiedProgressionData.copyOfArr.join(' ');
  const correctAnswer = `${modifiedProgressionData.hiddenNum}`;
  return {
    question,
    correctAnswer,
  };
};

export default function () {
  return gameEngine(gameInfo, getGameData);
}
