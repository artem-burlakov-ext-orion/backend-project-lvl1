import baseGame from '..';
import { getRandomNumber, arithFuncArr } from '../utils';

export const hiddenNumSymbol = '..';
export const numOfProgression = 2;
export const lengthOfProgression = 10;

const getProgression = (length) => {
  const arithProgression = [getRandomNumber(1, 100)];
  const { func } = arithFuncArr[getRandomNumber(0, arithFuncArr.length - 1)];
  for (let i = 0; i < length - 1; i += 1) {
    const newElem = func(arithProgression[i], numOfProgression);
    arithProgression.push(newElem);
  }
  return arithProgression;
};

const getModifiedProgression = (arr) => {
  const copyArr = arr;
  const index = getRandomNumber(0, copyArr.length - 1);
  const hiddenNum = copyArr[index];
  copyArr[index] = hiddenNumSymbol;
  return { copyArr, hiddenNum };
};

const gameInfo = 'What number is missing in the progression?';

const getGameData = () => {
  const arithProgression = getProgression(lengthOfProgression);
  const modifiedProgression = getModifiedProgression(arithProgression);
  const question = modifiedProgression.copyArr.join(' ');
  const correctAnswer = `${modifiedProgression.hiddenNum}`;
  return {
    question,
    correctAnswer,
  };
};

const startProgression = () => baseGame(gameInfo, getGameData);

export default startProgression;
