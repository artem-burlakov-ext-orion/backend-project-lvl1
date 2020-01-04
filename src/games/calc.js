import baseGame from '..';
import { getRandomNumber, arithFuncArr } from '../utils';


const calcGameObj = {
  welcome: 'What is the result of the expression?',
  correctAnswer: null,
  getQuestion() {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const randomArithFuncObj = arithFuncArr[getRandomNumber(0, arithFuncArr.length - 1)];
    this.correctAnswer = `${randomArithFuncObj.func(firstNumber, secondNumber)}`;
    return `${firstNumber} ${randomArithFuncObj.symbol} ${secondNumber}`;
  },
};

const startCalc = () => baseGame(calcGameObj);

export default startCalc;
