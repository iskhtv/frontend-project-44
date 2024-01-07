import { getRandomValue } from '../index.js';

export function getProgression() {
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
