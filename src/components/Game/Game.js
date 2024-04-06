import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.info({ answer });

  const handleOnSubmit = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  const handleRestart = () => {
    setAnswer(sample(WORDS));
    setGameStatus('running');
    setGuesses([]);
  };

  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((rowIndex) => {
          return (
            <Guess
              key={rowIndex}
              tentativeGuess={guesses[rowIndex]}
              answer={answer}
            />
          );
        })}
      </div>
      <GuessInput
        onSubmit={handleOnSubmit}
        disabled={gameStatus !== 'running'}
      />
      {gameStatus === 'won' && (
        <WonBanner
          handleRestart={handleRestart}
          numberOfGuesses={guesses.length}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner handleRestart={handleRestart} answer={answer} />
      )}
    </>
  );
}

export default Game;
