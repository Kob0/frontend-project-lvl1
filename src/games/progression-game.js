import { engine } from '../engine';
import { randomNumbers } from '../math';

const gameGreeting = 'What number is missing in the progression?';

const gameData = () => {
  const progression = [];
  const firstElement = randomNumbers(1, 100);
  const progressionStep = randomNumbers(1, 100);
  progression.push(firstElement);

  for (let i = 1; i < 9; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
    progression.push(progression[i]);
  }

  const questionElement = randomNumbers(0, 9);
  const correctAnswer = String(progression[questionElement]);
  progression[questionElement] = '..';
  const question = progression.join(' ');
  const data = [question, correctAnswer];

  return data;
};

export default () => {
  const game = engine(gameGreeting, gameData);

  return game;
};
