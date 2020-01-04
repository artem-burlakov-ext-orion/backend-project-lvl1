import readlineSync from 'readline-sync';
import { numberOfTries } from './utils';


const baseGame = (gameObj) => {
  console.log(gameObj.welcome);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let counter = 0;
  while (counter !== numberOfTries) {
    const question = gameObj.getQuestion();
    const { correctAnswer } = gameObj;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    counter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default baseGame;
