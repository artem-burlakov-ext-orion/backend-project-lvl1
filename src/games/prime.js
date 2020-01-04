import baseGame from '..';
import { getRandomNumber, lowNumber, highNumber } from '../utils';

const primeGameObj = {
  welcome: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  correctAnswer: null,
  getQuestion() {
    const number = getRandomNumber(lowNumber + 1, highNumber);
    this.correctAnswer = this.getCorrectAnswer(number);
    return `${number}`;
  },
  getCorrectAnswer(number) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  },
};

const startPrime = () => baseGame(primeGameObj);

export default startPrime;
