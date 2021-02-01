import readlineSync from 'readline-sync';
import isNumberEven from './isEven.js';
import userName from './cli.js';

const game = (arr) => {

	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	let succes = 0;

  for (let i = 0; i < arr.length;) {

	let correctAnswer = `${isNumberEven(arr[i])}`;
    const question1 = console.log(`Question: ${arr[i]}`);
	let userAnswer = readlineSync.question(`Your answer: `);


	if (correctAnswer === userAnswer) {
		succes += 1;
		console.log('Correct!');
		i += 1;
	}	else {
	succes = 0;
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`)
	  return;
	};
	
  if (succes === 3) {
	  console.log(`Congratulations, ${userName}!`)
		};
	};
};

export default game;