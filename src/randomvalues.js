const randomArray = (length) => {

	const arr = [];
for (let i = 0; i < length;) {
	
	arr[i] = Math.floor(Math.random() * 100);
	i += 1;
	};

return arr;
};

export default randomArray;