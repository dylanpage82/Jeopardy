import { useState } from "react";
export default function Score(props) {
  const [score, setScore] = useState(0);
  const decreaseScore = () => {
    setScore(score - 100);
  };
  const increaseScore = () => {
    setScore(score + 100);
  };

  return (
    <div className="score">
      <h1>Score:{score}</h1>
      <button className="decrease" onClick={decreaseScore}>
        Decrease
      </button>
      <button className="increase" onClick={increaseScore}>
        Increase
      </button>
    </div>
  );
}
