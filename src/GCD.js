import readlineSync from 'readline-sync';
import randomArray from './randomvalues.js';
import userName from './cli.js';
import getGCDFor from './getGCD.js';



const gameGCD = (arr1, arr2) => {

	console.log('Find the greatest common divisor of given numbers.');
	let succes = 0;

  for (let i = 0; i < arr1.length;) {

	let correctAnswer = `${getGCDFor(arr1[i], arr2[i])}`;
    const question1 = console.log(`Question: ${arr1[i]} ${arr2[i]}`);
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

//const testCalc = gameCalc(arrDigits1, arrDigits2, arrOperators);
//testCalc;

export default gameGCD;