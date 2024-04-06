import { useState } from 'react';

const GuessInput = ({ onSubmit, disabled }) => {
  const [guess, setGuess] = useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();

        if (guess.length !== 5) {
          window.alert('Enter a 5 character word!');
          return;
        }
        onSubmit(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        disabled={disabled}
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
};

export default GuessInput;
