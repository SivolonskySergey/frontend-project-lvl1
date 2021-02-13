import readlineSync from 'readline-sync';
import _ from 'lodash';
import {getComparator} from '../index.js';


const processGame = () => {
	
	const compare = getComparator();
	
	while (true) {
		const num1 = _.random(0, 100);
		const num2 = _.random(0, 100);

		const [op, calcMethod] = _.sample(
			[
				["*", (a, b) => a * b],
				["+", (a, b) => a + b],
				["-", (a, b) => a - b],
			]
		);
		const rightAnswer = calcMethod(num1, num2);
		
		console.log(`What is the result of the expression?\n`, `Question: ${num1} ${op} ${num2}`);

		const userAnswer = Number(readlineSync.question(`Your answer: `));

		const compareResult = compare(rightAnswer, userAnswer);

		if (compareResult === 'failed') {
			break;
		} if (compareResult === 'success') {
			break;
		} 
	};
};

export default processGame;
  