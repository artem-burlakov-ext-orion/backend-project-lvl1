#!/usr/bin/env node

import { baseGame, menu } from '../..';

while (true) {
  const gameObj = menu();
  if (gameObj === 'exit') {
    console.log('Good bye!!!');
    break;
  }
  baseGame(gameObj);
}
