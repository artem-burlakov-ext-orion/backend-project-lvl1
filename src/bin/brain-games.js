#!/usr/bin/env node

import { menu } from '../utils';
import allGames from '../games/allgames';
import baseGame from '..';

while (true) {
  const userChoice = menu();
  if (userChoice === '0') {
    console.log('Good bye!!!');
    break;
  }
  baseGame(allGames.get(userChoice));
}
