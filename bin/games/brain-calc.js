#!/usr/bin/env node
import gameCalc from '../../src/calculator.js';
import randomArray from '../../src/randomvalues.js';
import getRandomOperators from '../../src/randomOperators.js';

const arrayFor = ['*', '+', '-', '*', '-'];
const randomArray1 = randomArray(3);
const randomArray2 = randomArray(3);
const randomOperators = getRandomOperators(arrayFor, 3);



const game = gameCalc(randomArray1, randomArray2, randomOperators);
game; 