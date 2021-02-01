#!/usr/bin/env node
import gameGCD from '../../src/GCD.js';
import randomArray from '../../src/randomvalues.js';

const randomArray1 = randomArray(3);
const randomArray2 = randomArray(3);

const game = gameGCD(randomArray1, randomArray2);
game;