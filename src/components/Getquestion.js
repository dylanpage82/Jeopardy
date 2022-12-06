import { useState } from "react";
export default function Getquestion(props) {
  const [jepAnswer, setJepAnswer] = useState(null);
  ///not working properly
  const handleChange = (props) => {
    setJepAnswer(props.answer);
  };
  return (
    <>
      {props.id ? (
        <div className="button" onClick={handleChange} value={jepAnswer}>
          Click to Reveal Question
        </div>
      ) : (
        <div>YOUR DUMB</div>
      )}
    </>
  );
}
