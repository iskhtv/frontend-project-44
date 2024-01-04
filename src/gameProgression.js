import readlineSync from 'readline-sync';
import askUserName from './cli.js';

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/*  function generateProgression(progressionLenght, firstProgressionValue, progressionIncrement) {
  const progressionArray = [];
  progressionArray.length = progressionLenght;
  progressionArray[0] = firstProgressionValue;
  for (let i = 1; i < progressionArray.length; i += 1) {
    progressionArray[i] = progressionIncrement + progressionArray[i - 1];
  }
}  */

function getProgressionQuestion() {
  const progressionLenght = getRandomValue(5, 10);
  const progressionIncrement = getRandomValue(1, 10);
  const missedSymbol = getRandomValue(1, (progressionLenght - 1));
  const firstProgressionValue = getRandomValue(1, 10);

  const progressionArray = [];
  progressionArray.length = progressionLenght;
  progressionArray[0] = firstProgressionValue;
  for (let i = 1; i < progressionArray.length; i += 1) {
    progressionArray[i] = progressionIncrement + progressionArray[i - 1];
  }

  const progressionArrayForUser = progressionArray;
  const correctAnswer = progressionArrayForUser[missedSymbol];
  progressionArrayForUser[missedSymbol] = '..';
  const questionForUser = progressionArray;

  return { questionForUser, correctAnswer };
}

function progressionGame() {
  const user = askUserName();
  console.log('What number is missing in the progression?');
  const question = getProgressionQuestion();
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
export default progressionGame;
