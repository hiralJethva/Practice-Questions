import "./styles.css";
import { useState } from "react";

export default function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <h3> Enter Input 1: </h3>
      <input
        name="input1"
        value={input1}
        onChange={(e) => setInput1(parseInt(e.target.value, 10))}
      />
      <h3> Enter Input 2: </h3>
      <input
        name="input2"
        value={input2}
        onChange={(e) => setInput2(parseInt(e.target.value, 10))}
      />
      <h3> result : {result}</h3>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setResult(input1 + input2);
          }}
        >
          +
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setResult(input1 - input2);
          }}
        >
          -
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setResult(input1 * input2);
          }}
        >
          *
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setResult(input1 / input2);
          }}
        >
          /
        </button>
      </div>
    </div>
  );
}
