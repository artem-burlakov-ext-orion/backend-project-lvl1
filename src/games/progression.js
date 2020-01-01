import {
  getRandomNumber, lowNumber, highNumber, arithFuncArr,
  numOfProgression, hiddenNumSymbol, lengthOfProgression,
} from '../utils';

const getProgression = (length) => {
  const arithProgression = [getRandomNumber(lowNumber, highNumber)];
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

const progressionGameObj = {
  welcome: 'What number is missing in the progression?',
  correctAnswer: null,
  getQuestion() {
    const arithProgression = getProgression(lengthOfProgression);
    const modifiedProgression = getModifiedProgression(arithProgression);
    this.correctAnswer = `${modifiedProgression.hiddenNum}`;
    return modifiedProgression.copyArr.join(' ');
  },
};

export default progressionGameObj;
