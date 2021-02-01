

const getGCDFor = (value1, value2) => {
	let gcd = 1;
	
	for (let i = 1; i < 100; i += 1) {
		if (value1 % i === 0 && value2 % i === 0 && i > gcd) {
			gcd = i;
		};
	};
	return gcd;
};


export default getGCDFor;