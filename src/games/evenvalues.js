import readlineSync from 'readline-sync';
import isNumberEven from '../isEven.js';
import {getComparator} from '../index.js';
import _ from 'lodash';


const processGame = () => {

	const compare = getComparator();
	while (true) {
		const num = _.random(0, 100);
		console.log('Answer "yes" if the number is even, otherwise answer "no".');
		console.log(`Question: ${num}`);
		const rightAnswer = `${isNumberEven(num)}`;
    	const userAnswer = readlineSync.question(`Your answer: `);
		const compareResult = compare(rightAnswer, userAnswer);
		if (compareResult === 'failed') {
		break;
		} if (compareResult === 'success') {
		break;
		} 
	}
};

export default processGame;