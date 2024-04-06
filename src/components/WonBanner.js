import Banner from './Banner';
const BannerVictory = ({ handleRestart, numberOfGuesses }) => {
  return (
    <Banner status="happy" action={handleRestart} actionText="Restart game">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numberOfGuesses === 1 ? '1 guess' : `${numberOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
};

export default BannerVictory;
