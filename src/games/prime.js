import readlineSync from 'readline-sync';
import {getComparator} from '../index.js';
import _ from 'lodash';
import isNumberPrime from '../isPrime.js';

const processGame = () => {
	
	const compare = getComparator();
	
	while (true) {
	
		const num = _.random(2, 1000);
		
		console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`); 
		console.log(`Question: ${num}`);
		const rightAnswer = isNumberPrime(num);
		const userAnswer = readlineSync.question(`Your answer: `);

		const compareResult = compare(rightAnswer, userAnswer);

		if (compareResult === 'failed') {
			break;
		} if (compareResult === 'success') {
			break;
		} 
	};
};

export default processGame;
  