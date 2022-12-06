import { useState } from "react";
export default function GameDisplay(props) {
  const [show, setShow] = useState(true);
  return (
    <>
      {props.jeopardy && props.jeopardy[0].id ? (
        <div className="display">
          <h2> Catagory: {props.jeopardy[0].category.title}</h2>
          <h3> Points:{props.jeopardy[0].value}</h3>
          <h3> Answer:{props.jeopardy[0].question}</h3>
          {show ? null : <h3>{props.jeopardy[0].answer}</h3>}
          <button onClick={() => setShow(!show)}>Get Answer</button>
        </div>
      ) : (
        <div className="display">
          <h2>Catagory:</h2>
          <h3>Points:</h3>
          <h3>Answer:</h3>
        </div>
      )}
    </>
  );
}
