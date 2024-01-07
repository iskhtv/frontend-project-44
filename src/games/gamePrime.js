import { getRandomValue } from '../index.js';

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

export function generateTask() {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const question = getRandomValue(1, 100);
  const correctAnswer = isPrimeNumber(question);
  return { question, correctAnswer, instruction };
}

export default { generateTask };
