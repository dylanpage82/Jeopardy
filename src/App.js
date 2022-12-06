import "./styles.css";
import { useState, useEffect } from "react";
// import Getquestion from "./components/Getquestion";
import GameDisplay from "./components/GameDisplay";
import Score from "./components/Score";
import Button from "./components/Button";

export default function App() {
  const [jeopardy, setJeopardy] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getJeopardy = async () => {
    try {
      const response = await fetch("https://jservice.io/api/random");
      const data = await response.json();
      setJeopardy(data);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.messsage);
    }
  };
  return (
    <div className="App">
      <h1 className="welcome">Welcome To Jeopardy!</h1>
      <Score />
      <h1>Let's Play</h1>
      <Button questionChange={getJeopardy} />
      <div>{errorMessage ? `Error:${errorMessage}` : ""}</div>
      <GameDisplay jeopardy={jeopardy} />
    </div>
  );
}
