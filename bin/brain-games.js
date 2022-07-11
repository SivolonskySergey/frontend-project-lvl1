#!/usr/bin/env node
//import startMenu from '../src/menu.js';
import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

game();
//startMenu();
