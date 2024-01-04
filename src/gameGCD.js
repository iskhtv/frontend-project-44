import readlineSync from 'readline-sync';
import askUserName from './cli.js';

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getGCDforPair(n, m) {
  if (m !== 0) {
    const k = n % m;
    return getGCDforPair(m, k);
  }
  return n;
}

function getGCDpair() {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  const value1 = getRandomValue(MIN_NUMBER, MAX_NUMBER);
  const value2 = getRandomValue(MIN_NUMBER, MAX_NUMBER);

  const questionForUser = `${value1} ${value2}`;
  const correctAnswer = getGCDforPair(value1, value2);

  return { questionForUser, correctAnswer };
}

function gcdGame() {
  const user = askUserName();
  console.log('Find the greatest common divisor of given numbers.');
  const question = getGCDpair();
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
export default gcdGame;
