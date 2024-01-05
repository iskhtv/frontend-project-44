import readlineSync from 'readline-sync';
import askUserName from './cli.js';

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function isPrimeNumber(n) {
  let answer;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return 'no';
  }

  if (n > 1 === true) {
    answer = 'yes';
  } else { answer = 'no'; }
  console.log(`${answer}this is answer`);
  return answer;
}

function getNumber() {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  const value = getRandomValue(MIN_NUMBER, MAX_NUMBER);

  const questionForUser = `${value}`;
  const correctAnswer = isPrimeNumber(value);

  return { questionForUser, correctAnswer };
}

function primeGame() {
  const user = askUserName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  const question = getNumber();
  console.log(`Question: ${question.questionForUser}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === String(question.correctAnswer)) {
    console.log('Correct!');
    console.log(`Congratulations, ${user}!`);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${question.correctAnswer}'.`);
    console.log(`Let's try again, ${user}!`);
  }
}

export default primeGame;
