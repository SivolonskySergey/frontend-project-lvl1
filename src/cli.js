import _ from 'lodash';

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question('May I have your name? ');

const greetings = () => {
	
	const hi = console.log(`Hi ${userName}!`);
	
};

export default greetings;