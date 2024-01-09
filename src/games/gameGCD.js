import { getRandomValue, getGCDforPair } from '../index.js';

export function generateTask() {
  const instruction = 'Find the greatest common divisor of given numbers.';
  const value1 = getRandomValue(1, 100);
  const value2 = getRandomValue(1, 100);
  const question = (`${value1} ${value2}`);
  const correctAnswer = getGCDforPair(value1, value2);
  return { question, correctAnswer, instruction };
}

export default { generateTask };
