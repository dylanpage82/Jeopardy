import { useState } from "react";
export default function Button(props) {
  const [searchQuestion, setSearchQuestion] = useState(null);
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.questionChange(searchQuestion);
        }}
      >
        Get Question
      </button>
    </div>
  );
}
