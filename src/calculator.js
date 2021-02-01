import readlineSync from 'readline-sync';
import randomArray from './randomvalues.js';
import getRandomOperators from './randomOperators.js';
import userName from './cli.js';
import getMathResult from './doMath.js'

//const arrDigits1 = ['56', '75', '13'];
//const arrDigits2 = ['3', '69', '21'];
//const arrOperators = ['+', '-', '*'];


const gameCalc = (arr1, arr2, operators) => {

	console.log('What is the result of the expression?');
	let succes = 0;

  for (let i = 0; i < arr1.length;) {

	let correctAnswer = `${getMathResult(arr1[i], arr2[i], operators[i])}`;
    const question1 = console.log(`Question: ${arr1[i]} ${operators[i]} ${arr2[i]}`);
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

export default gameCalc;