import baseGame from '..';
import { getRandomNumber, arithFuncArr } from '../utils';


const gameInfo = 'What is the result of the expression?';
const getGameData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const randomArithFuncObj = arithFuncArr[getRandomNumber(0, arithFuncArr.length - 1)];
  const question = `${firstNumber} ${randomArithFuncObj.symbol} ${secondNumber}`;
  const correctAnswer = `${randomArithFuncObj.func(firstNumber, secondNumber)}`;
  return {
    question,
    correctAnswer,
  };
};

const startCalc = () => baseGame(gameInfo, getGameData);

export default startCalc;
