import readlineSync from 'readline-sync';
import askUserName from './cli.js';

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
      if (roundPassed === rounds) {
        congragulateUser(user);
      }
    } else {
      userToTryAgain(userAnswer, currentRoundTask.correctAnswer, user);
      roundPassed = 0;
      break;
    }
  } while (roundPassed < rounds);
}
// Utils
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomSign() {
  const signArray = ['+', '-', '*'];
  const randomOperator = Math.floor(Math.random() * signArray.length);
  return signArray[randomOperator];
}

function getGCDforPair(n, m) {
  if (m !== 0) {
    const k = n % m;
    return getGCDforPair(m, k);
  }
  return n;
}

function isPrimeNumber(n) {
  let answer;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return 'no';
  }

  if (n > 1 === true) {
    answer = 'yes';
  } else { answer = 'no'; }
  return answer;
}

function getProgression() {
  const progressionLength = getRandomValue(5, 10);
  const progressionIncrement = getRandomValue(1, 10);
  const firstProgressionValue = getRandomValue(1, 10);

  const progressionArray = [];
  progressionArray.length = progressionLength;
  progressionArray[0] = firstProgressionValue;
  for (let i = 1; i < progressionArray.length; i += 1) {
    progressionArray[i] = progressionIncrement + progressionArray[i - 1];
  }
  return progressionArray;
}

export {
  getRandomValue, getRandomSign, getGCDforPair, play, isPrimeNumber, getProgression,
};
