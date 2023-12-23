import readlineSync from 'readline-sync';
import askUserName from './cli.js';

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getQuestionWithAnswer() {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  const question = getRandomValue(MIN_NUMBER, MAX_NUMBER);
  const CorrectAnswer = question % 2 === 0 ? 'yes' : 'no';

  console.log(question, CorrectAnswer);
  return { question, CorrectAnswer };
}

const requiredCorrectAnswerCount = 3;

function evenGame() {
  let correctAnswerCount = 0;
  const user = askUserName();

  while (correctAnswerCount < requiredCorrectAnswerCount) {
    const INSTRUCTION = 'Answer "yes" if the number is even, otherwise answer "no".';
    const currentQuestion = getQuestionWithAnswer();
    console.log(INSTRUCTION);

    console.log(`Question: ${currentQuestion.question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(currentQuestion.CorrectAnswer)) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currentQuestion.CorrectAnswer}'.`);
      console.log(`Let's try again, ${user}!`);
      correctAnswerCount = 0;
      break;
    }
  }
  if (correctAnswerCount === requiredCorrectAnswerCount) {
    console.log(`Congratulations, ${user}!`);
  }
}
export default evenGame;
