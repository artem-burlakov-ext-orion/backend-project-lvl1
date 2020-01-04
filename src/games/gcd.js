import baseGame from '..';
import { getRandomNumber } from '../utils';

const gcdGameObj = {
  welcome: 'Find the greatest common divisor of given numbers.',
  correctAnswer: null,
  getQuestion() {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    this.correctAnswer = `${this.getCorrectAnswer(firstNumber, secondNumber)}`;
    return `${firstNumber} ${secondNumber}`;
  },
  getCorrectAnswer(firstNumber, secondNumber) {
    let maxNumber = Math.max(firstNumber, secondNumber);
    let minNumber = Math.min(firstNumber, secondNumber);
    let remOnDiv = maxNumber % minNumber;
    while (remOnDiv !== 0) {
      maxNumber = minNumber;
      minNumber = remOnDiv;
      remOnDiv = maxNumber % minNumber;
    }
    return minNumber;
  },
};

const startGcd = () => baseGame(gcdGameObj);

export default startGcd;
