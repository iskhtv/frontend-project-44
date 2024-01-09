import { getRandomValue, getRandomSign } from '../index.js';

export function generateTask() {
  const instruction = 'What is the result of the expression?';
  const operand1 = getRandomValue(1, 10);
  const operand2 = getRandomValue(1, 10);
  const operator = getRandomSign();

  const question = `${operand1} ${operator} ${operand2}`;
  let correctAnswer = 0;
  switch (operator) {
    case '+':
      correctAnswer = operand1 + operand2;
      break;
    case '-':
      correctAnswer = operand1 - operand2;
      break;
    case '*':
      correctAnswer = operand1 * operand2;
      break;
    default:
      console.log('Unexpected operator');
      break;
  }
  // const correctAnswer = calculateCorrectAnswer(operand1, operand2, operator);
  return { question, correctAnswer, instruction };
}

export default { generateTask };
