import readlineSync from 'readline-sync';

const lowNumber = 1;
const highNumber = 100;

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
}

export const getRandomNumber = (low, high) => {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

export const numbersGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');
  const userName = getName();
  console.log('Hello ', userName, '!');
  let counter = 0;
  while (counter !== 3) {
    let newNumber = getRandomNumber(lowNumber, highNumber);
    let correctAnswer = (newNumber % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${newNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
      continue;
    }
    console.log(`\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${correctAnswer}\'.`);
    console.log(`Let\'s try again, ${userName}!`);
    return;
  }
  console.log(`Congratulations, ${userName}!`);
}


