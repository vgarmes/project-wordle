import { range } from '../utils';
const Guess = ({ value }) => {
  return (
    <p class="guess">
      {range(5).map((num) => (
        <span key={num} class="cell">
          {value ? value[num] : null}
        </span>
      ))}
    </p>
  );
};

export default Guess;
