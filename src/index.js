
import {
	cons, car, cdr, toString, isPair,
  } from '@hexlet/pairs';
import {userName} from './cli.js';

export const getComparator = () => {
    const requiredRightAnswersCount = 3;
    let rightAnswersCounter = 0;

    return (rightAnswer, userAnswer) => {
        if (rightAnswer === userAnswer) {
			rightAnswersCounter += 1;
			console.log('Correct!');
        } else {
			console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". Let's try again, ${userName}!`);
            return "failed";
        }

        if (rightAnswersCounter === requiredRightAnswersCount) {
			console.log(`Congratulations, ${userName}!`)
            return "success";
        }
        return "next";
    };
};


/*export const compareAnswers = (correctAnswer, userAnswer) => {

	if (correctAnswer === userAnswer) {
		succes += 1;
		console.log('Correct!');
		i += 1;
	} else {
	console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
	return;
		};
	if (succes === 3) {
	console.log(`Congratulations, ${userName}!`);
	};
};

*/