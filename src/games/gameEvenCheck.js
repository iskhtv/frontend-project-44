import { getRandomValue } from '../index.js';

export function getQuestion() {
  const question = getRandomValue(1, 100);
  return question;
}

export function getCorrectAnswer(question) {
  let correctAnswer = '';
  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else { correctAnswer = 'no'; }
  return correctAnswer;
}

export function generateTask() {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);
  return { question, correctAnswer, instruction };
}
