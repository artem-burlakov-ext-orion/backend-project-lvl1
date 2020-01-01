import numbersGameObj from './even';
import calcGameObj from './calc';
import gcdGameObj from './gcd';
import primeGameObj from './prime';
import progressionGameObj from './progression';

const allGamesMap = new Map([
  ['1', numbersGameObj],
  ['2', calcGameObj],
  ['3', gcdGameObj],
  ['4', primeGameObj],
  ['5', progressionGameObj],
]);

export default allGamesMap;
