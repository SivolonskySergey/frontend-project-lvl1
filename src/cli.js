import _ from 'lodash';

import readlineSync from 'readline-sync';

export const readline = console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');

export const hi = console.log(`Hi ${userName}!`);
