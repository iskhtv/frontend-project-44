import readlineSync from 'readline-sync';
import askUserName from './cli.js';

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomSign() {
  const signArray = ['+', '-', '*'];
  const randomOperator = Math.floor(Math.random() * signArray.length);
  return signArray[randomOperator];
}

function calculateCorrectAnswer(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error('Invalid expression');
  }
}

function getCalcExpression() {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  const operand1 = getRandomValue(MIN_NUMBER, MAX_NUMBER);
  const operand2 = getRandomValue(MIN_NUMBER, MAX_NUMBER);

  const operator = getRandomSign();

  const questionForUser = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = calculateCorrectAnswer(operand1, operand2, operator);

  return { questionForUser, correctAnswer };
}

function calcGame() {
  const user = askUserName();
  console.log('What is the result of the expression?');
  const question = getCalcExpression();
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

export default calcGame;