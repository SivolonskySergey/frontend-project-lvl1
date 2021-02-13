import readlineSync from 'readline-sync';
import randomArray from '../randomvalues.js';
import userName from '../cli.js';
import getGCDFor from '../getGCD.js';
import {getComparator} from '../index.js';
import _ from 'lodash';


const processGame = () => {
	const compare = getComparator();
	while (true) {
		const num1 = _.random(0, 100);
		const num2 = _.random(0, 100);

	console.log('Find the greatest common divisor of given numbers.');
	
		const rightAnswer = `${getGCDFor(num1, num2)}`;
    	console.log(`Question: ${num1} ${num2}`);
		let userAnswer = readlineSync.question(`Your answer: `);
	const compareResults = compare(rightAnswer, userAnswer);
		if (compareResults === 'failed') {
			break;
		} if (compareResults === 'success') {
			break;
		}
	};
};

export default processGame;