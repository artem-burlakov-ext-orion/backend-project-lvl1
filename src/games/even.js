import baseGame from '..';
import { getRandomNumber } from '../utils';

const numbersGameObj = {
  welcome: 'Answer \'yes\' if the number is even, otherwise answer \'no\'.',
  correctAnswer: null,
  getQuestion() {
    const randomNumber = getRandomNumber(1, 100);
    this.correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    return `${randomNumber}`;
  },
};

const startNumbers = () => baseGame(numbersGameObj);

export default startNumbers;
