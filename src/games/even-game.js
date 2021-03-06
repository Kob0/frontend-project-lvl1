import makeGame from '..';
import genRandomNumber from '../math';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const getGameData = () => {
  const number = genRandomNumber(1, 100);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => makeGame(description, getGameData);
