import { getRandomValue, isPrimeNumber } from '../index.js';

export function generateTask() {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const question = getRandomValue(1, 100);
  const correctAnswer = isPrimeNumber(question);
  return { question, correctAnswer, instruction };
}

export default { generateTask };
