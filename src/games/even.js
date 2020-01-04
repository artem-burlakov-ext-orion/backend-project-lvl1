import baseGame from '..';
import {
  getRandomNumber, lowNumber, highNumber,
} from '../utils';

const numbersGameObj = {
  welcome: 'Answer \'yes\' if the number is even, otherwise answer \'no\'.',
  correctAnswer: null,
  getQuestion() {
    const randomNumber = getRandomNumber(lowNumber, highNumber);
    this.correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    return `${randomNumber}`;
  },
};

const startNumbers = () => baseGame(numbersGameObj);

export default startNumbers;
