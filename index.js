

const gameLogic = (arr1, [arr2, operators]) => {

	console.log('What is the result of the expression?');
	let succes = 0;

  for (let i = 0; i < operators.length;) {

	let correctAnswer = `${inputCorrectAnswer}`;
    const question1 = console.log(`Question: ${inputQuestion}`);
	let userAnswer = readlineSync.question(`Your answer: `);


	if (correctAnswer === userAnswer) {
		succes += 1;
		console.log('Correct!');
		i += 1;
	}	else {
	succes = 0;
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`)
	  return;
	};
	
  if (succes === 3) {
	  console.log(`Congratulations, ${userName}!`)
		};
	};
};

export default gameLogic;