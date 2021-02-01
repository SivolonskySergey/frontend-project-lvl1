

const getMathResult = (value1, value2, operator) => {

	let results = 0;

	if (operator === '+') {
	results = Number(value1) + Number(value2);
	};
	if (operator === '-') {
	results = Number(value1) - Number(value2);
	};
	if (operator === '*') {
	results = Number(value1) * Number(value2);
	};
	return results;
}

export default getMathResult;

