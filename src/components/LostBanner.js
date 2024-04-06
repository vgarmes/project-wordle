import Banner from './Banner';

const BannerVictory = ({ handleRestart, answer }) => {
  return (
    <Banner status="sad" action={handleRestart} actionText="Restart game">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
};

export default BannerVictory;
