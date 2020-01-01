import {
  getRandomNumber, lowNumber, highNumber, arithFuncArr,
} from '../utils';

const calcGameObj = {
  welcome: 'What is the result of the expression?',
  correctAnswer: null,
  getQuestion() {
    const firstNumber = getRandomNumber(lowNumber, highNumber);
    const secondNumber = getRandomNumber(lowNumber, highNumber);
    const randomArithFuncObj = arithFuncArr[getRandomNumber(0, arithFuncArr.length - 1)];
    this.correctAnswer = `${randomArithFuncObj.func(firstNumber, secondNumber)}`;
    return `${firstNumber} ${randomArithFuncObj.symbol} ${secondNumber}`;
  },
};

export default calcGameObj;
