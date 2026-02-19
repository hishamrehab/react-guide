const ResultModel = ({ result, targetTime }) => {
  return (
    <dialog className="result-model">
      <h2>Your {result}</h2>
      <p>
        Target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped the timer <strong>X second left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModel;
