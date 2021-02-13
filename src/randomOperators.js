import randomArray from '../src/randomvalues.js';



const getRandomOperators = (arr, index) => {

	const operators = [];

	for (let i = 0; i < index; i += 1) {

operators[i] = arr[Math.floor(Math.random() * index)];
	
	};
	return operators;
};

export default getRandomOperators;

