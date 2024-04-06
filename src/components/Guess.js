import { range } from '../utils';
import { checkGuess } from '../game-helpers';

const Guess = ({ tentativeGuess, answer }) => {
  const result = checkGuess(tentativeGuess, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={result ? `cell ${result[num].status}` : 'cell'}
        >
          {tentativeGuess ? tentativeGuess[num] : null}
        </span>
      ))}
    </p>
  );
};

export default Guess;
