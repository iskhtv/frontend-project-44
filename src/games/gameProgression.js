import { getRandomValue, getProgression } from '../index.js';

export function generateTask() {
  const instruction = 'What number is missing in the progression?';
  const progression = getProgression();
  const missedSymbol = getRandomValue(1, progression.length);
  const correctAnswer = progression[missedSymbol];
  let question = progression;
  question[missedSymbol] = '..';
  question = String(progression).replace(/,/g, ' ');
  return { question, correctAnswer, instruction };
}

export default { generateTask };
