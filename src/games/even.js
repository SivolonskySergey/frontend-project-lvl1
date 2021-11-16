import getRandomNumber from '../utils.js';
import runGame from '../engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateGameConditions = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [`${question}`, answer];
};

const exportFunctions = {
  isEven,
  run: () => runGame(description, generateGameConditions),
};

export default exportFunctions;
