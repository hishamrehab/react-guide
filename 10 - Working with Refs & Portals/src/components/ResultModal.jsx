import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(({ ref, targetTime, remainingTime, onReset }, ref) => {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round(1 - remainingTime / (targetTime * 1000)) * 100;

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-model">
      {userLost && <h2>Your Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        Target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped the timer <strong>{formattedRemainingTime} second left.</strong>
      </p>
      <form method="dialog" onSunmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
});

export default ResultModal;
