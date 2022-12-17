import pikachu from '../assets/pikachu-running.gif';

const Loading = () => {
  return (
    <div data-testid="loading">
      <img src={pikachu} alt="loading" />
    </div>
  );
}

export default Loading;