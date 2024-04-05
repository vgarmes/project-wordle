import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((rowIndex) => {
          const guessForRow = guesses[rowIndex];
          return (
            <p class="guess">
              {guessForRow
                ? guessForRow
                    .split('')
                    .map((char) => <span class="cell">{char}</span>)
                : range(0, 5).map((_) => <span class="cell"></span>)}
            </p>
          );
        })}
      </div>
      <GuessInput onSubmit={(guess) => setGuesses([...guesses, guess])} />
    </>
  );
}

export default Game;
