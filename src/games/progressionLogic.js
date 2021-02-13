import {
	getStrOfArr, randomNumber, getRandomArr, hiddenValue, getArrOfStr
} from '../getProgression.js';
import readlineSync from 'readline-sync';
import {getComparator} from '../index.js';


const processGame = () => {

	const compare = getComparator();

	while (true) {	
		
		const array = getRandomArr(randomNumber(5, 10));
		const randomIndex = randomNumber(1, array.length - 1);
		const rightAnswer = `${array[randomIndex]}`;
		const hideValue = hiddenValue(array, randomIndex);
		
		
		console.log('What number is missing in the progression?');
		console.log(`Question: ${getStrOfArr(hideValue)}`);
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

	/*for (let i = 0; i < randomArr.length; i += 1) {
		let temp = 0;
		randomArr[i];
		
		if (randomArr[i] === '..') {

			temp += (randomArr[i - 1] + randomArr[i + 1]) / 2;
			
			let correctAnswer = `${temp}`;
		

	if (correctAnswer === userAnswer) {
		succes += 1;
		console.log('Correct!');

		
	}	else {
	succes = 0;
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
	return;};
};
	
  if (succes === 3) {
	  console.log(`Congratulations, ${userName}!`)
		};
	};
};*/
