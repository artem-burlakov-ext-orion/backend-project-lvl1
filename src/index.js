import readlineSync from 'readline-sync';

const numberOfTries = 3;

const gameEngine = (gameInfo, getGameData) => {
  console.log('----------------------');
  console.log(gameInfo);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let counter = 0; counter < numberOfTries; counter += 1) {
    const gameData = getGameData();
    const { question } = gameData;
    const { correctAnswer } = gameData;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
