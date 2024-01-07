import readlineSync from 'readline-sync';
import askUserName from './cli.js';

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function provideInstructionForUser(instruction) {
  console.log(instruction);
}

function provideQuestionForUser(question) {
  console.log(`Question: ${question}`);
}

function congragulateUser(user) {
  console.log(`Congratulations, ${user}!`);
}

function getUserAnswer() {
  return readlineSync.question('Your answer: ');
}

function checkUserAnswer(userAnswer, correctAnswer) {
  const result = (String(userAnswer) === String(correctAnswer));
  return result;
}

function userToTryAgain(userAnswer, correctAnswer, user) {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${user}!`);
}

function sayUserCorrect() {
  console.log('Correct!');
}

function play(generateTask) {
  let roundPassed = 0;
  const rounds = 3;
  const user = askUserName();

  do {
    const currentRoundTask = generateTask();
    // console.log(currentRoundTask.question, currentRoundTask.correctAnswer);
    provideInstructionForUser(currentRoundTask.instruction);
    provideQuestionForUser(currentRoundTask.question);
    const userAnswer = getUserAnswer();
    const result = checkUserAnswer(userAnswer, currentRoundTask.correctAnswer);
    if (result) {
      sayUserCorrect();
      roundPassed += 1;
    } else {
      userToTryAgain(userAnswer, currentRoundTask.correctAnswer, user);
      roundPassed = 0;
      break;
    }
  } while (roundPassed < rounds);
  if (roundPassed === rounds) {
    congragulateUser(user);
  }
}

export { getRandomValue, play };
