import readlineSync from 'readline-sync';
import gameEven from './games/even.js';
import gameCalculate from './games/calc.js';
import gameGcd from './games/gcd.js';
import gameProgression from './games/prog.js';
import gamePrime from './games/prime.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const games = ['Even', 'Calculation', 'Greater Common Divisor', 'Progression', 'Prime'];
  const gameIndex = readlineSync.keyInSelect(games, 'Choose the game: ');

  switch (gameIndex) {
    case 0:
      return gameEven.run();
    case 1:
      return gameCalculate.run();
    case 2:
      return gameGcd.run();
    case 3:
      return gameProgression.run();
    case 4:
      return gamePrime.run();
    default:
      return null;
  }
};
