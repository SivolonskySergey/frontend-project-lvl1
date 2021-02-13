
// Делаем строку из произвольного массива

export const getStrOfArr = (arr) => {
	
	const parts = [];
  	for (const item of arr) {
    parts.push(item);
  };
	const innerValue = parts.join(' ');
	const result = `${innerValue}`;
  return result;
};

// Генератор случайных чисел

export const randomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;
	
// Делаем произвольный массив

export const getRandomArr = (length) => {

const step = randomNumber(2, 10);
const fisrtValue = randomNumber(15, 100);

let arr = [fisrtValue];


for (let i = 1; i < length; i += 1) {

	let newValue = arr[i - 1] + step;
	arr.push(newValue); 
	}; 
	
return arr;
};

// Скрываем одно рандомное число

export const hiddenValue = (arr, index) => {

	arr[index] = '..';
	
	return arr;
} 

export const STRING = getStrOfArr(getRandomArr(randomNumber()));

// Делаем массив из строки

export const getArrOfStr = (str) => {
	const newArray = [];
	for (const item of str) {
		newArray.push(Number(item));
	};
	return newArray;
};

